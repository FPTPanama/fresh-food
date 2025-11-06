#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const baseBranch = process.argv[2] || 'main';
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];

try {
  let changedFiles;
  
  try {
    changedFiles = execSync(
      `git diff --name-only --diff-filter=ACMR ${baseBranch}...HEAD`,
      { encoding: 'utf-8' }
    ).trim().split('\n');
  } catch (error) {
    try {
      changedFiles = execSync(
        'git diff --name-only --diff-filter=ACMR HEAD',
        { encoding: 'utf-8' }
      ).trim().split('\n');
      
      if (!changedFiles.length || !changedFiles[0]) {
        changedFiles = execSync(
          'git diff --cached --name-only --diff-filter=ACMR',
          { encoding: 'utf-8' }
        ).trim().split('\n');
      }
      
      if (!changedFiles.length || !changedFiles[0]) {
        changedFiles = execSync(
          'git diff --name-only --diff-filter=ACMR',
          { encoding: 'utf-8' }
        ).trim().split('\n');
      }
    } catch (err) {
      console.error('❌ Error al obtener archivos modificados:', err.message);
      process.exit(1);
    }
  }

  const filesToLint = changedFiles
    .filter(file => {
      if (!file) return false;
      const ext = path.extname(file).toLowerCase();
      return extensions.includes(ext);
    })
    .filter(file => {
      try {
        const fs = require('fs');
        return fs.existsSync(file);
      } catch {
        return false;
      }
    });

  if (filesToLint.length === 0) {
    console.log('✅ No hay archivos modificados para revisar.');
    process.exit(0);
  }

  console.log(`\n📝 Revisando ${filesToLint.length} archivo(s) modificado(s):\n`);
  filesToLint.forEach(file => console.log(`  - ${file}`));
  console.log('');

  try {
    execSync(
      `npx eslint ${filesToLint.join(' ')}`,
      { stdio: 'inherit' }
    );
    console.log('\n✅ Lint completado sin errores en archivos modificados.');
  } catch (error) {
    console.error('\n❌ Se encontraron errores de lint en los archivos modificados.');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error ejecutando lint-changed:', error.message);
  process.exit(1);
}


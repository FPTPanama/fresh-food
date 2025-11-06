#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const baseBranch = process.argv[2] || 'main';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// Configurar entorno para desactivar pager de git
const env = Object.assign({}, process.env, {
  GIT_PAGER: '',
  PAGER: ''
});

try {
  let changedFiles;

  try {
    // Intentar obtener archivos comparando con la rama base
    try {
      changedFiles = execSync(
        `git --no-pager diff --name-only --diff-filter=ACMR ${baseBranch}...HEAD`,
        { encoding: 'utf-8', env, stdio: 'pipe' }
      ).trim().split('\n').filter(f => f);
    } catch (diffError) {
      // Si falla, intentar con HEAD directamente (archivos modificados sin commit)
      try {
        changedFiles = execSync(
          'git --no-pager diff --name-only --diff-filter=ACMR HEAD',
          { encoding: 'utf-8', env, stdio: 'pipe' }
        ).trim().split('\n').filter(f => f);

        // Si no hay cambios, intentar con staged
        if (!changedFiles.length) {
          changedFiles = execSync(
            'git --no-pager diff --cached --name-only --diff-filter=ACMR',
            { encoding: 'utf-8', env, stdio: 'pipe' }
          ).trim().split('\n').filter(f => f);
        }

        // Si aún no hay cambios, intentar con working directory
        if (!changedFiles.length) {
          changedFiles = execSync(
            'git --no-pager diff --name-only --diff-filter=ACMR',
            { encoding: 'utf-8', env, stdio: 'pipe' }
          ).trim().split('\n').filter(f => f);
        }
      } catch (err) {
        console.error('❌ Error al obtener archivos modificados:', err.message);
        process.exit(1);
      }
    }
  } catch (error) {
    console.error('❌ Error al obtener archivos modificados:', error.message);
    process.exit(1);
  }

  const filesToLint = changedFiles
    .filter(file => {
      if (!file) return false;
      const ext = path.extname(file).toLowerCase();
      return extensions.includes(ext);
    })
    .filter(file => {
      // Excluir archivos de configuración que no deben ser linteados
      if (file.includes('.vscode/') || file.includes('node_modules/')) {
        return false;
      }
      return true;
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
    // Usar eslint directamente - Next.js usa ESLint bajo el capó
    // Escapamos las rutas correctamente para Windows y Unix
    const escapedFiles = filesToLint.map(file => {
      // Escapar espacios y caracteres especiales en las rutas
      if (process.platform === 'win32') {
        return `"${file.replace(/"/g, '\\"')}"`;
      }
      return `"${file.replace(/"/g, '\\"')}"`;
    }).join(' ');

    const eslintCommand = `npx eslint ${escapedFiles}`;
    execSync(eslintCommand, {
      stdio: 'inherit',
      shell: true,
      cwd: process.cwd()
    });
    console.log('\n✅ Lint completado sin errores en archivos modificados.');
  } catch (error) {
    // Si ESLint encuentra errores, el exit code será != 0
    // pero no queremos mostrar el stack trace, solo el mensaje
    if (error.status !== 0 && error.status !== null) {
      console.error('\n❌ Se encontraron errores de lint en los archivos modificados.');
      process.exit(1);
    } else {
      console.error('\n❌ Error ejecutando lint:', error.message);
      process.exit(1);
    }
  }
} catch (error) {
  console.error('❌ Error ejecutando lint-changed:', error.message);
  process.exit(1);
}


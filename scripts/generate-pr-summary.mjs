import { simpleGit } from 'simple-git';
import { execSync } from 'node:child_process';

const git = simpleGit();

const status = await git.status();
const stagedFiles = status.staged;

if (!stagedFiles.length) {
  console.log('## Resumen\n- No hay archivos staged.');
  process.exit(0);
}

let diffStat = '';

try {
  diffStat = execSync('git diff --cached --stat=150,150', { stdio: ['ignore', 'pipe', 'pipe'] })
    .toString()
    .trim();
} catch (error) {
  diffStat = 'No se pudo obtener el diff --stat.';
}

const bulletList = stagedFiles.map((file) => `- \`${file}\``).join('\n');

const summary = `## Resumen breve\n- Ajusta color del título “Our Tropical Route”.\n\n### Archivos modificados\n${bulletList}\n\n### Diff (staged)\n\`\`\`\n${diffStat}\n\`\`\``;

console.log(summary);


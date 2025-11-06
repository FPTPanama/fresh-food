#!/bin/bash

# Script para ejecutar ESLint solo en archivos modificados
# Uso: ./scripts/lint-changed.sh [base-branch]

BASE_BRANCH="${1:-main}"
EXTENSIONS="js|jsx|ts|tsx|json"

echo "🔍 Buscando archivos modificados comparados con '${BASE_BRANCH}'..."

# Obtener archivos modificados
if git rev-parse --verify "${BASE_BRANCH}" >/dev/null 2>&1; then
  CHANGED_FILES=$(git diff --name-only --diff-filter=ACMR "${BASE_BRANCH}"...HEAD)
else
  echo "⚠️  Rama '${BASE_BRANCH}' no encontrada, usando archivos modificados en working directory..."
  CHANGED_FILES=$(git diff --name-only --diff-filter=ACMR HEAD)
  
  if [ -z "$CHANGED_FILES" ]; then
    CHANGED_FILES=$(git diff --cached --name-only --diff-filter=ACMR)
  fi
  
  if [ -z "$CHANGED_FILES" ]; then
    CHANGED_FILES=$(git diff --name-only --diff-filter=ACMR)
  fi
fi

# Filtrar solo archivos con extensiones relevantes
FILES_TO_LINT=$(echo "$CHANGED_FILES" | grep -E "\.(${EXTENSIONS})$")

if [ -z "$FILES_TO_LINT" ]; then
  echo "✅ No hay archivos modificados para revisar."
  exit 0
fi

# Contar archivos
FILE_COUNT=$(echo "$FILES_TO_LINT" | wc -l | tr -d ' ')

echo ""
echo "📝 Revisando ${FILE_COUNT} archivo(s) modificado(s):"
echo ""
echo "$FILES_TO_LINT" | sed 's/^/  - /'
echo ""

# Ejecutar ESLint
echo "$FILES_TO_LINT" | xargs npx eslint

EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo ""
  echo "✅ Lint completado sin errores en archivos modificados."
else
  echo ""
  echo "❌ Se encontraron errores de lint en los archivos modificados."
fi

exit $EXIT_CODE





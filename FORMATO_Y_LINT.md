# 📝 Configuración de Formateo y Linting

Este proyecto está configurado para formatear automáticamente el código al guardar y mostrar errores de lint en tiempo real.

## ✅ Configuración Completada

### 1. **Prettier** - Formateo automático
- ✅ Configurado en `.prettierrc`
- ✅ Formatea al guardar automáticamente
- ✅ Archivos ignorados en `.prettierignore`

### 2. **ESLint** - Detección de errores
- ✅ Configurado por Next.js (incluido por defecto)
- ✅ Muestra errores en tiempo real
- ✅ Auto-fix al guardar

### 3. **VS Code Settings** - Configuración del editor
- ✅ Formateo automático al guardar
- ✅ Errores de ESLint visibles en tiempo real
- ✅ Auto-fix de ESLint al guardar

## 🚀 Cómo Funciona

### Al Guardar un Archivo:
1. **Prettier** formatea el código automáticamente
2. **ESLint** detecta y corrige errores automáticamente
3. El código queda ordenado y sin errores

### Errores de Lint:
- Aparecen subrayados en rojo/amarillo en el editor
- Puedes verlos en el panel "Problems" (Ctrl+Shift+M)
- Se corrigen automáticamente al guardar (si es posible)

## 📋 Scripts Disponibles

### Formateo
```bash
# Formatear todos los archivos
npm run format

# Verificar si hay archivos sin formatear
npm run format:check
```

### Linting
```bash
# Verificar errores de ESLint
npm run lint

# Verificar y corregir errores automáticamente
npm run lint:fix
```

## 🔧 Extensiones Recomendadas (VS Code)

Si usas VS Code, instala estas extensiones (aparecerán automáticamente):

1. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
2. **ESLint** (`dbaeumer.vscode-eslint`)
3. **EditorConfig** (`editorconfig.editorconfig`)

## 📝 Archivos de Configuración

- `.prettierrc` - Configuración de Prettier
- `.prettierignore` - Archivos que Prettier ignora
- `.editorconfig` - Configuración del editor
- `.vscode/settings.json` - Configuración específica de VS Code
- `.vscode/extensions.json` - Extensiones recomendadas

## ⚙️ Personalización

### Cambiar reglas de Prettier:
Edita `.prettierrc` según tus preferencias.

### Cambiar reglas de ESLint:
Next.js usa ESLint configurado por defecto. Para personalizar, crea un archivo `eslint.config.js` en la raíz.

## 🎯 Características

- ✅ Formateo automático al guardar
- ✅ Detección de errores en tiempo real
- ✅ Auto-fix de errores comunes
- ✅ Configuración consistente entre desarrolladores
- ✅ Soporte para JS, JSX, TS, TSX, JSON, CSS, SCSS, MD

## 💡 Tips

1. **Si no se formatea al guardar**: Verifica que tengas la extensión de Prettier instalada
2. **Si no ves errores de ESLint**: Verifica que tengas la extensión de ESLint instalada
3. **Para formatear manualmente**: Usa `Shift + Alt + F` (Windows) o `Shift + Option + F` (Mac)
4. **Para ver todos los problemas**: Abre el panel "Problems" con `Ctrl + Shift + M`



# 🔧 Diagnóstico de Prettier en VS Code

## ✅ Pasos para Verificar que Prettier Funciona

### 1. Verificar que la extensión esté instalada

1. Abre VS Code
2. Presiona `Ctrl+Shift+X` (o ve a Extensions)
3. Busca **"Prettier - Code formatter"**
4. Verifica que esté **instalada** y **habilitada** (no deshabilitada)
5. Si no está instalada, instálala y **recarga VS Code**

### 2. Verificar que Prettier sea el formateador por defecto

1. Abre cualquier archivo `.js` o `.jsx`
2. Haz clic derecho → **"Format Document With..."**
3. Si aparece **"Prettier"** como opción, selecciónalo
4. Si no aparece, la extensión no está instalada o detectada

### 3. Probar manualmente

1. Abre `tailwind.config.js`
2. Desordena algo de código (por ejemplo, añade espacios extra)
3. Presiona `Shift+Alt+F` (Windows) o `Shift+Option+F` (Mac)
4. Debería formatear automáticamente

### 4. Verificar que funcione al guardar

1. Abre cualquier archivo `.js`
2. Desordena el código
3. Guarda el archivo (`Ctrl+S`)
4. Debería formatear automáticamente

### 5. Verificar desde la terminal

Si desde VS Code no funciona, prueba desde la terminal:

```bash
npm run format
```

Esto formateará todos los archivos del proyecto.

## 🚨 Problemas Comunes

### Problema 1: "No formatter configured"
- **Solución**: Asegúrate de que la extensión Prettier esté instalada y habilitada

### Problema 2: No formatea al guardar
- **Solución**: Verifica que `editor.formatOnSave` esté en `true` en `.vscode/settings.json`

### Problema 3: Conflicto con otras extensiones
- **Solución**: Deshabilita temporalmente otras extensiones de formateo (como "Beautify")

### Problema 4: No detecta el archivo `.prettierrc`
- **Solución**: Recarga VS Code (`Ctrl+Shift+P` → "Reload Window")

## 📝 Comandos Útiles

- **Formatear archivo actual**: `Shift+Alt+F` (Windows) o `Shift+Option+F` (Mac)
- **Formatear al guardar**: Automático si está configurado
- **Formatear desde terminal**: `npm run format`
- **Verificar formato**: `npm run format:check`

## 🔍 Verificar Estado

Para verificar el estado actual, ejecuta:

```bash
# Verificar que Prettier funciona
npx prettier --version

# Probar formateo en un archivo específico
npx prettier --write tailwind.config.js

# Verificar formato sin cambiar
npx prettier --check tailwind.config.js
```


# 📋 Datos de Certificaciones

Este directorio contiene los datos estructurados de las certificaciones en formato JSON.

## 📁 Archivos

- `certificaciones.json` - Datos completos de todas las certificaciones GlobalG.A.P.

## 📊 Estructura del JSON

El archivo `certificaciones.json` contiene:

```json
{
  "certificaciones": [
    {
      "id": "string",
      "tipo": "string",
      "numeroCertificado": "string",
      "ggn": "string",
      "fechaEmision": "YYYY-MM-DD",
      "validoDesde": "YYYY-MM-DD",
      "validoHasta": "YYYY-MM-DD",
      "productor": { ... },
      "productos": [ ... ],
      "paisesDestino": [ ... ],
      "organismoEmisor": { ... },
      ...
    }
  ],
  "resumen": { ... },
  "metadata": { ... }
}
```

## 🔧 Uso en Componentes

```jsx
import certificationsData from '@/data/certificaciones.json';

// Acceder a las certificaciones
const { certificaciones } = certificationsData;

// Filtrar certificaciones activas
const certificacionesActivas = certificaciones.filter(cert => {
  const hoy = new Date();
  const validoHasta = new Date(cert.validoHasta);
  return validoHasta >= hoy;
});
```

## 📝 Componente React

Usa el componente `CertificationsSection` para mostrar las certificaciones:

```jsx
import CertificationsSection from '@/components/certifications/CertificationsSection';

// En tu página
<CertificationsSection
  showDetails={true}
  layout="cards"
/>
```

### Props del Componente

- `showDetails` (boolean): Muestra detalles adicionales (default: false)
- `layout` (string): 'grid' | 'list' | 'cards' (default: 'cards')
- `className` (string): Clases CSS adicionales

## 🔄 Actualización de Datos

Cuando se agreguen nuevas certificaciones o se actualicen las existentes:

1. Editar `certificaciones.json`
2. Mantener la estructura JSON válida
3. Actualizar las fechas en formato ISO (YYYY-MM-DD)
4. Verificar que todos los campos requeridos estén presentes

## ✅ Validación

El JSON debe cumplir:
- Formato JSON válido
- Fechas en formato ISO (YYYY-MM-DD)
- IDs únicos para cada certificación
- GGNs únicos



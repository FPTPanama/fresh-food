# 📝 EJEMPLO DE INTEGRACIÓN - Footer con Certificaciones

## Código para agregar al Footer

```jsx
// En src/components/footer/footer.js

import CertificationsBadge from "@/components/certifications/CertificationsBadge";

// Dentro del componente Footer, agregar antes del cierre del div principal:

<div className="flex flex-col items-center justify-center w-full mt-6 pt-6 border-t border-gray-200">
  <p className="text-sm font-bold text-greendark mb-3">
    Certificaciones Internacionales
  </p>
  <CertificationsBadge size="small" layout="horizontal" showLabels={false} />
  <p className="text-xs text-gray-900 mt-2">
    <a
      href="https://database.globalgap.org/globalgap/search/SearchMain.faces"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Verificar certificados →
    </a>
  </p>
</div>;
```

## Ubicación sugerida en el Footer

```
Footer
├── Logo + Descripción
├── Imagen de frutas
└── Dirección + Redes Sociales
    └── [NUEVO] Certificaciones
        ├── Título: "Certificaciones Internacionales"
        ├── Badge GlobalG.A.P.
        └── Link: "Verificar certificados"
```

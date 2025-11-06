# 🏆 GUÍA DE CERTIFICACIONES - Logos para la Web

## 📋 LOGOS NECESARIOS

### 1. **GlobalG.A.P. Logo** (OBLIGATORIO)

**Descripción**: Logo oficial de GlobalG.A.P. para certificaciones IFA

**Dónde obtenerlo**:
- **Sitio oficial**: https://www.globalgap.org/uk_en/for-businesses/brand-and-logo/logo-downloads/
- **Registro requerido**: Sí (necesitas crear cuenta)
- **Formatos disponibles**: SVG, PNG, JPG
- **Tamaños**: Varios tamaños disponibles

**Restricciones de uso**:
- ✅ Solo puedes usarlo si tienes certificación activa
- ✅ Debe enlazar a tu certificado en la base de datos GlobalG.A.P.
- ✅ No puedes modificar el logo
- ✅ Debe cumplir con las guías de marca de GlobalG.A.P.

**Links de verificación** (para incluir en los logos):
- Zuely Trelles: https://database.globalgap.org/globalgap/search/SearchMain.faces (GGN: 4063651260816)
- Las Tres Piñas: https://database.globalgap.org/search (GGN: 4063651684858)

---

### 2. **NSF Certification Logo** (OPCIONAL)

**Descripción**: Logo del organismo certificador de Zuely Trelles

**Dónde obtenerlo**:
- Sitio: https://www.nsf.org/about-nsf/nsf-logo-and-brand-guidelines
- Usar solo si quieres mostrar quién certificó

---

### 3. **KIWA España Logo** (OPCIONAL)

**Descripción**: Logo del organismo certificador de Las Tres Piñas

**Dónde obtenerlo**:
- Sitio: https://www.kiwa.com/es/es/
- Contactar para obtener logo oficial

---

## 📍 DÓNDE COLOCAR LOS LOGOS EN LA WEB

### Opción A: Sección "Certificaciones" (RECOMENDADO)

**Ubicación**: Página "About Us" o nueva página "Certificaciones"

**Beneficios**:
- ✅ Espacio para explicar las certificaciones
- ✅ Puedes mostrar detalles de cada certificado
- ✅ Mejor para SEO

**Ejemplo de estructura**:
```
/about-us
  └── Sección: "Certificaciones y Calidad"
      ├── Título: "Certificaciones Internacionales"
      ├── Logo GlobalG.A.P.
      ├── Descripción breve
      ├── Lista de certificados activos
      └── Links de verificación
```

---

### Opción B: Footer (VISIBILIDAD MÁXIMA)

**Ubicación**: Footer de todas las páginas

**Beneficios**:
- ✅ Visible en todas las páginas
- ✅ Transmite confianza constantemente
- ✅ No interrumpe el flujo de contenido

**Ejemplo**:
```
Footer
  ├── Logo empresa
  ├── Dirección
  ├── Redes sociales
  └── [NUEVO] Badges de certificaciones (pequeños)
```

---

### Opción C: Página de Productos (CONTEXTUAL)

**Ubicación**: Junto a cada producto certificado

**Beneficios**:
- ✅ Muestra certificación específica por producto
- ✅ Información contextual
- ✅ Mejor para conversión

**Ejemplo**:
```
Producto: Pitahaya
  ├── Imagen
  ├── Descripción
  └── [Badge GlobalG.A.P.] "Certificado GlobalG.A.P. IFA v6.0"
```

---

## 🎨 ESPECIFICACIONES DE DISEÑO

### Tamaños recomendados:
- **Footer**: 60-80px de ancho
- **Sección dedicada**: 120-150px de ancho
- **Página de productos**: 80-100px de ancho

### Colores:
- **GlobalG.A.P.**: Verde (#00A651 - color oficial)
- **Fondo**: Blanco o transparente
- **Bordes**: Opcional, sutil (1px gris claro)

### Animaciones sugeridas:
- Hover: Opacidad 80% o ligero scale (1.05)
- Click: Enlace a verificación del certificado

---

## 📝 TEXTO ACOMPAÑANTE

### Texto corto (Footer):
```
"Certificados GlobalG.A.P. IFA v6.0 GFS"
```

### Texto medio (Sección):
```
"Certificación Internacional GlobalG.A.P.
Buenas Prácticas Agrícolas IFA versión 6.0
Ver certificado →"
```

### Texto completo (Página dedicada):
```
"Contamos con certificación GlobalG.A.P. Integrated Farm Assurance (IFA) versión 6.0 GFS, 
que garantiza que nuestros procesos de producción cumplen con los más altos estándares 
internacionales de calidad, seguridad alimentaria y sostenibilidad ambiental.

Nuestros productos certificados:
- Pitahaya (Zuely Trelles Martinez) - GGN: 4063651260816
- Piña (Las Tres Piñas S.A.) - GGN: 4063651684858

Verificar certificados: [Link a GlobalG.A.P. Database]"
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Descargar logo oficial GlobalG.A.P. desde su portal
- [ ] Guardar logo en `/public/img/certifications/`
- [ ] Crear componente `CertificationsBadge.js` (ya creado ✅)
- [ ] Agregar sección en About Us o crear página Certificaciones
- [ ] Agregar badges en Footer (opcional)
- [ ] Agregar badges en página de Productos (opcional)
- [ ] Agregar links de verificación a GlobalG.A.P. Database
- [ ] Verificar que los logos sean responsive
- [ ] Probar en diferentes dispositivos

---

## 🔗 LINKS IMPORTANTES

- **GlobalG.A.P. Logo Portal**: https://www.globalgap.org/uk_en/for-businesses/brand-and-logo/logo-downloads/
- **Base de datos GlobalG.A.P.**: https://database.globalgap.org/globalgap/search/SearchMain.faces
- **Guías de marca GlobalG.A.P.**: Disponibles en el portal de descarga

---

## 📦 ESTRUCTURA DE ARCHIVOS SUGERIDA

```
public/
  img/
    certifications/
      ├── globalgap-logo.svg
      ├── globalgap-logo.png (fallback)
      ├── nsf-logo.svg (opcional)
      └── kiwa-logo.svg (opcional)
```

---

## ⚠️ IMPORTANTE

1. **Registro requerido**: Necesitas registrarte en el portal de GlobalG.A.P. para descargar logos oficiales
2. **Guías de uso**: Lee las guías de marca antes de usar los logos
3. **Actualización**: Los logos pueden cambiar, verifica periódicamente
4. **Validez**: Solo muestra logos si tu certificación está activa y vigente


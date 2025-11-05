// Componente optimizado del logo de Global GAP
'use client';

import { useEffect, useState } from 'react';

export default function GlobalGapIcon({
  width = 50,
  height = 40,
  color = '#224C22',
  className = ''
}) {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch('/img/global-gap.svg')
      .then(res => res.text())
      .then(text => {
        // El SVG usa currentColor, así que reemplazamos con el color específico
        const modified = text.replace(/fill="currentColor"/g, `fill="${color}"`);
        setSvgContent(modified);
      })
      .catch(err => console.error('Error loading SVG:', err));
  }, [color]);

  if (!svgContent) {
    return (
      <div
        style={{ width, height, display: 'inline-flex', alignItems: 'center' }}
        className={className}
      />
    );
  }

  return (
    <div
      className={className}
      style={{
        width,
        height,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle'
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}


#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para renombrar certificados con nombres más descriptivos
"""

import os
from pathlib import Path

# Mapeo de archivos actuales a nuevos nombres
RENAME_MAP = {
    "eCertificate ingles.pdf": "Certificado_GlobalGAP_LAS_TRES_PINAS_Pineapple_2025-2026.pdf",
    "eCertificate dos.pdf": "Certificado_GlobalGAP_LAS_TRES_PINAS_Pineapple_2025-2026_DE.pdf",
    "eCertificate ZUELY TRELLES.pdf": "Certificado_GlobalGAP_ZUELY_TRELLES_Pitahaya_2025-2026.pdf",
    "Certificado GG IFA V6 ZUELY TRELLES.pdf": "Certificado_GlobalGAP_IFA_V6_ZUELY_TRELLES_Pitahaya_2025-2026_Completo.pdf",
    "Reporte_Final_Auditoria_IFA V6-GFS ZUELY TRELLES.pdf": "Reporte_Auditoria_GlobalGAP_IFA_V6_ZUELY_TRELLES_Pitahaya_2025.pdf"
}

def rename_files():
    """Renombra los archivos PDF según el mapeo definido"""
    assets_dir = Path("public/assets")
    
    if not assets_dir.exists():
        print(f"❌ No se encontró el directorio: {assets_dir}")
        return
    
    print("🔄 Renombrando archivos de certificados...\n")
    
    renamed_count = 0
    
    for old_name, new_name in RENAME_MAP.items():
        old_path = assets_dir / old_name
        new_path = assets_dir / new_name
        
        if old_path.exists():
            try:
                old_path.rename(new_path)
                print(f"✅ {old_name}")
                print(f"   → {new_name}\n")
                renamed_count += 1
            except Exception as e:
                print(f"❌ Error al renombrar {old_name}: {e}\n")
        else:
            print(f"⚠️  No se encontró: {old_name}\n")
    
    print(f"\n{'='*60}")
    print(f"✅ Proceso completado: {renamed_count}/{len(RENAME_MAP)} archivos renombrados")
    print(f"{'='*60}\n")
    
    # También renombrar archivos de texto extraídos si existen
    print("🔄 Renombrando archivos de texto extraídos...\n")
    
    for old_name, new_name in RENAME_MAP.items():
        old_text_file = assets_dir / f"{old_name.replace('.pdf', '')}_extracted.txt"
        new_text_file = assets_dir / f"{new_name.replace('.pdf', '')}_extracted.txt"
        
        if old_text_file.exists():
            try:
                old_text_file.rename(new_text_file)
                print(f"✅ {old_text_file.name} → {new_text_file.name}")
            except Exception as e:
                print(f"⚠️  No se pudo renombrar {old_text_file.name}: {e}")

if __name__ == "__main__":
    print("="*60)
    print("RENOMBRAMIENTO DE CERTIFICADOS")
    print("="*60)
    print()
    
    response = input("¿Deseas renombrar los archivos ahora? (s/n): ").lower()
    
    if response == 's' or response == 'si' or response == 'sí':
        rename_files()
    else:
        print("❌ Operación cancelada")


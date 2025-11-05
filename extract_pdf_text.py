#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para extraer texto de PDFs y analizar certificados
"""

import os
import sys
from pathlib import Path

try:
    import pdfplumber
    HAS_PDFPLUMBER = True
except ImportError:
    HAS_PDFPLUMBER = False
    try:
        import PyPDF2
        HAS_PYPDF2 = True
    except ImportError:
        HAS_PYPDF2 = False
        print("Error: Necesitas instalar pdfplumber o PyPDF2")
        sys.exit(1)

def extract_text_pdfplumber(pdf_path):
    """Extrae texto usando pdfplumber (más preciso)"""
    text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n\n"
    except Exception as e:
        print(f"Error con pdfplumber: {e}")
        return None
    return text

def extract_text_pypdf2(pdf_path):
    """Extrae texto usando PyPDF2 (fallback)"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n\n"
    except Exception as e:
        print(f"Error con PyPDF2: {e}")
        return None
    return text

def extract_text(pdf_path):
    """Extrae texto del PDF usando el mejor método disponible"""
    if HAS_PDFPLUMBER:
        text = extract_text_pdfplumber(pdf_path)
        if text:
            return text
    
    if HAS_PYPDF2:
        return extract_text_pypdf2(pdf_path)
    
    return None

def analyze_pdf(pdf_path):
    """Analiza un PDF y extrae información clave"""
    print(f"\n{'='*60}")
    print(f"Analizando: {pdf_path.name}")
    print(f"{'='*60}\n")
    
    text = extract_text(pdf_path)
    
    if not text:
        print("❌ No se pudo extraer texto del PDF")
        return None
    
    # Guardar texto extraído
    output_file = pdf_path.parent / f"{pdf_path.stem}_extracted.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(text)
    
    print(f"✅ Texto extraído guardado en: {output_file.name}")
    print(f"\n📄 Primeras 500 caracteres del contenido:\n")
    print(text[:500])
    print("\n...")
    
    return text

def main():
    # Directorio de assets
    assets_dir = Path("public/assets")
    
    if not assets_dir.exists():
        print(f"❌ No se encontró el directorio: {assets_dir}")
        return
    
    # Encontrar todos los PDFs
    pdf_files = list(assets_dir.glob("*.pdf"))
    
    if not pdf_files:
        print("❌ No se encontraron archivos PDF")
        return
    
    print(f"📁 Encontrados {len(pdf_files)} archivos PDF\n")
    
    results = {}
    
    for pdf_file in pdf_files:
        text = analyze_pdf(pdf_file)
        if text:
            results[pdf_file.name] = text
    
    print(f"\n{'='*60}")
    print(f"✅ Proceso completado: {len(results)}/{len(pdf_files)} PDFs procesados")
    print(f"{'='*60}\n")
    
    return results

if __name__ == "__main__":
    main()


import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'imageGallery',
  title: 'Galería de Imágenes',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Galería',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Pie de imagen',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(2).error('La galería debe tener al menos 2 imágenes'),
    }),
    defineField({
      name: 'layout',
      title: 'Diseño',
      type: 'string',
      options: {
        list: [
          { title: 'Cuadrícula', value: 'grid' },
          { title: 'Carrusel', value: 'carousel' },
          { title: 'Mosaico', value: 'masonry' },
        ],
      },
      initialValue: 'grid',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare({ title, images }) {
      return {
        title: title || 'Galería de Imágenes',
        subtitle: `${images?.length || 0} imágenes`,
        media: images?.[0],
      }
    },
  },
})

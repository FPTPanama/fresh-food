import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Contenido del Post',
  name: 'blockContent',
  type: 'array',
  of: [
    // Texto enriquecido
    defineArrayMember({
      title: 'Texto',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Cita', value: 'blockquote' },
      ],
      lists: [
        { title: 'Viñetas', value: 'bullet' },
        { title: 'Numerada', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Negrita', value: 'strong' },
          { title: 'Cursiva', value: 'em' },
          { title: 'Subrayado', value: 'underline' },
          { title: 'Tachado', value: 'strike-through' },
        ],
        annotations: [
          {
            title: 'Enlace',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),

    // Imagen individual
    defineArrayMember({
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
    }),

    // Galería de imágenes
    defineArrayMember({
      type: 'imageGallery',
    }),

    // Video embebido
    defineArrayMember({
      type: 'videoEmbed',
    }),

    // Llamada a la acción
    defineArrayMember({
      type: 'callToAction',
    }),

    // Cita destacada
    defineArrayMember({
      type: 'quoteBlock',
    }),

    // Caja de información
    defineArrayMember({
      type: 'infoBox',
    }),
  ],
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'callToAction',
  title: 'Llamada a la Acción',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'buttonText',
      title: 'Texto del Botón',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Enlace del Botón',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'style',
      title: 'Estilo',
      type: 'string',
      options: {
        list: [
          { title: 'Primario (Verde)', value: 'primary' },
          { title: 'Secundario (Naranja)', value: 'secondary' },
          { title: 'Sutil (Gris)', value: 'subtle' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      buttonText: 'buttonText',
    },
    prepare({ title, buttonText }) {
      return {
        title: title || 'Llamada a la Acción',
        subtitle: `Botón: ${buttonText || 'Sin texto'}`,
      }
    },
  },
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'infoBox',
  title: 'Caja de Información',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: '💡 Tip', value: 'tip' },
          { title: 'ℹ️ Información', value: 'info' },
          { title: '⚠️ Advertencia', value: 'warning' },
          { title: '✅ Éxito', value: 'success' },
        ],
      },
      initialValue: 'info',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
    },
    prepare({ title, type }) {
      const icons = {
        tip: '💡',
        info: 'ℹ️',
        warning: '⚠️',
        success: '✅',
      }
      return {
        title: title || 'Caja de Información',
        subtitle: icons[type] || 'ℹ️',
      }
    },
  },
})

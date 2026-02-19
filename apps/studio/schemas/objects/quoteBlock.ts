import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'quoteBlock',
  title: 'Cita Destacada',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Cita',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),
    defineField({
      name: 'authorTitle',
      title: 'Cargo/Título del Autor',
      type: 'string',
      description: 'Ej: CEO de Fresh Food, Agricultor de Panamá',
    }),
    defineField({
      name: 'authorImage',
      title: 'Foto del Autor',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      quote: 'quote',
      author: 'author',
      authorImage: 'authorImage',
    },
    prepare({ quote, author, authorImage }) {
      const shortQuote = quote?.length > 50 ? `${quote.substring(0, 50)}...` : quote
      return {
        title: `"${shortQuote}"`,
        subtitle: author ? `— ${author}` : 'Sin autor',
        media: authorImage,
      }
    },
  },
})

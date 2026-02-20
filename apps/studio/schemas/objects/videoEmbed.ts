import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'videoEmbed',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Video',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL del Video',
      type: 'url',
      description: 'URL de YouTube, Vimeo o video directo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Imagen de Portada',
      type: 'image',
      description: 'Opcional - se usa como preview antes de reproducir',
      options: { hotspot: true },
    }),
    defineField({
      name: 'caption',
      title: 'Descripción',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      thumbnail: 'thumbnail',
    },
    prepare({ title, url, thumbnail }) {
      return {
        title: title || 'Video',
        subtitle: url,
        media: thumbnail,
      }
    },
  },
})

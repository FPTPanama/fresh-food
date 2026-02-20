import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemas'

// Valores por defecto - reemplazar con tu proyecto de Sanity
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// Idiomas soportados
const supportedLanguages = [
  {id: 'es', title: 'Español'},
  {id: 'en', title: 'English'},
]

export default defineConfig({
  name: 'fresh-food-studio',
  title: 'Fresh Food Blog',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages,
      schemaTypes: ['post'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})

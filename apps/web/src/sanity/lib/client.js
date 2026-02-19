import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Verificar si Sanity está configurado
const sanityConfigured = Boolean(projectId && projectId !== 'your-project-id' && projectId !== '')

// Cliente de Sanity (solo si está configurado)
export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

// Cliente con token para preview mode
export const previewClient = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null

export const getClient = (preview = false) => (preview ? previewClient : client)

// Helper para verificar si está configurado
export function checkSanityConfig() {
  return sanityConfigured
}

// Helper para hacer fetch seguro
export async function safeFetch(query, params = {}) {
  if (!sanityConfigured || !client) {
    console.warn('Sanity no está configurado. Configura NEXT_PUBLIC_SANITY_PROJECT_ID en .env.local')
    return null
  }
  
  try {
    return await client.fetch(query, params)
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    return null
  }
}

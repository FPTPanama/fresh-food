import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

// Objetos (bloques de contenido)
import imageGallery from './objects/imageGallery'
import videoEmbed from './objects/videoEmbed'
import callToAction from './objects/callToAction'
import quoteBlock from './objects/quoteBlock'
import infoBox from './objects/infoBox'

export const schemaTypes = [
  // Documentos
  post,
  author,
  category,
  
  // Tipos de contenido
  blockContent,
  
  // Objetos (bloques flexibles)
  imageGallery,
  videoEmbed,
  callToAction,
  quoteBlock,
  infoBox,
]

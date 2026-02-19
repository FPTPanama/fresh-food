'use client'

import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

// Helper para obtener URL de imagen de forma segura
function getImageUrl(image, width = 400, height = 300) {
  try {
    // Si tiene asset con url directa (cuando se expande con asset->)
    if (image?.asset?.url) {
      return `${image.asset.url}?w=${width}&h=${height}&fit=crop`
    }
    // Si tiene _ref, usar urlFor
    if (image?.asset?._ref || image?._ref) {
      return urlFor(image).width(width).height(height).url()
    }
    return null
  } catch (error) {
    console.error('Error generating image URL:', error)
    return null
  }
}

// Componente para Galería de Imágenes
function ImageGallery({ value }) {
  if (!value?.images?.length) return null

  const layoutClasses = {
    grid: 'grid grid-cols-2 md:grid-cols-3 gap-4',
    carousel: 'flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4',
    masonry: 'columns-2 md:columns-3 gap-4',
  }

  return (
    <div className="my-8">
      {value.title && (
        <h3 className="mb-4 text-lg font-semibold">{value.title}</h3>
      )}
      <div className={layoutClasses[value.layout] || layoutClasses.grid}>
        {value.images.map((image, index) => {
          const imageUrl = getImageUrl(image, 400, 300)
          if (!imageUrl) return null
          
          return (
            <figure
              key={image._key || index}
              className={value.layout === 'carousel' ? 'flex-shrink-0 snap-center min-w-[300px]' : 'break-inside-avoid mb-4'}
            >
              <Image
                src={imageUrl}
                alt={image.alt || `Imagen ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto"
              />
              {image.caption && (
                <figcaption className="mt-1 text-center text-sm text-gray-500">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          )
        })}
      </div>
    </div>
  )
}

// Componente para Video
function VideoEmbed({ value }) {
  if (!value?.url) return null

  // Detectar tipo de video (YouTube, Vimeo, directo)
  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1]
      return `https://www.youtube.com/embed/${videoId}`
    }
    if (url.includes('vimeo.com')) {
      const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1]
      return `https://player.vimeo.com/video/${videoId}`
    }
    return url
  }

  return (
    <div className="my-8">
      {value.title && (
        <h3 className="mb-4 text-lg font-semibold">{value.title}</h3>
      )}
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <iframe
          src={getEmbedUrl(value.url)}
          title={value.title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {value.caption && (
        <p className="mt-2 text-center text-sm text-gray-500">{value.caption}</p>
      )}
    </div>
  )
}

// Componente para Call to Action
function CallToAction({ value }) {
  if (!value?.heading) return null

  const styleClasses = {
    primary: 'bg-green-600 hover:bg-green-700 text-white',
    secondary: 'bg-orange-500 hover:bg-orange-600 text-white',
    subtle: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
  }

  const bgClasses = {
    primary: 'bg-green-50 border-green-200',
    secondary: 'bg-orange-50 border-orange-200',
    subtle: 'bg-gray-50 border-gray-200',
  }

  return (
    <div
      className={`my-8 rounded-xl border p-6 text-center ${bgClasses[value.style] || bgClasses.primary}`}
    >
      <h3 className="mb-2 text-xl font-bold">{value.heading}</h3>
      {value.text && <p className="mb-4 text-gray-600">{value.text}</p>}
      <a
        href={value.buttonLink}
        className={`inline-block rounded-lg px-6 py-3 font-semibold transition-colors ${styleClasses[value.style] || styleClasses.primary}`}
      >
        {value.buttonText}
      </a>
    </div>
  )
}

// Componente para Cita Destacada
function QuoteBlock({ value }) {
  if (!value?.quote) return null

  const authorImageUrl = value.authorImage ? getImageUrl(value.authorImage, 48, 48) : null

  return (
    <blockquote className="my-8 border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
      <p className="text-xl italic text-gray-700 mb-4">"{value.quote}"</p>
      {(value.author || value.authorTitle) && (
        <footer className="flex items-center gap-3">
          {authorImageUrl && (
            <Image
              src={authorImageUrl}
              alt={value.author || 'Autor'}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <div>
            {value.author && (
              <cite className="not-italic font-semibold text-gray-900">
                {value.author}
              </cite>
            )}
            {value.authorTitle && (
              <p className="text-sm text-gray-500">{value.authorTitle}</p>
            )}
          </div>
        </footer>
      )}
    </blockquote>
  )
}

// Componente para Caja de Información
function InfoBox({ value }) {
  if (!value?.content) return null

  const typeStyles = {
    tip: {
      bg: 'bg-yellow-50 border-yellow-300',
      icon: '💡',
      title: 'Tip',
    },
    info: {
      bg: 'bg-blue-50 border-blue-300',
      icon: 'ℹ️',
      title: 'Información',
    },
    warning: {
      bg: 'bg-orange-50 border-orange-300',
      icon: '⚠️',
      title: 'Advertencia',
    },
    success: {
      bg: 'bg-green-50 border-green-300',
      icon: '✅',
      title: 'Éxito',
    },
  }

  const style = typeStyles[value.type] || typeStyles.info

  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${style.bg}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{style.icon}</span>
        <div>
          <h4 className="font-semibold text-gray-900">
            {value.title || style.title}
          </h4>
          <p className="mt-1 text-gray-700">{value.content}</p>
        </div>
      </div>
    </div>
  )
}

// Exportar todos los componentes para PortableText
export const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = getImageUrl(value, 800, 450)
      if (!imageUrl) return null
      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Imagen del post'}
            width={800}
            height={450}
            className="rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    imageGallery: ({ value }) => <ImageGallery value={value} />,
    videoEmbed: ({ value }) => <VideoEmbed value={value} />,
    callToAction: ({ value }) => <CallToAction value={value} />,
    quoteBlock: ({ value }) => <QuoteBlock value={value} />,
    infoBox: ({ value }) => <InfoBox value={value} />,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href?.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-green-600 hover:underline">
          {children}
        </a>
      )
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-8 text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-6 text-xl font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-4 text-lg font-semibold">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-green-500 pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
}

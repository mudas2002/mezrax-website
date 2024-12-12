// First, let's create a proper MediaDisplay component in a separate file
// components/ui/MediaDisplay.tsx

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface MediaDisplayProps {
  type: 'image' | 'video'
  src: string
  poster?: string
}

export default function MediaDisplay({ type, src, poster }: MediaDisplayProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (type === 'video') {
      const video = document.createElement('video')
      video.src = src
      video.onloadeddata = () => setIsLoaded(true)
      video.onerror = () => setHasError(true)
    }
  }, [src, type])

  if (hasError) {
    return (
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100 flex items-center justify-center">
        <p className="text-zinc-500">Unable to load media</p>
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100">
      {type === 'video' ? (
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            className="w-full h-full object-cover"
            onLoadedData={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <Image
          src={src}
          alt="Media content"
          fill
          className="object-cover"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
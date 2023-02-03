import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface AvatarProps {
  image: StaticImageData
  description: string
}

export function Avatar({ image, description }: AvatarProps) {
  return (
    <div className="h-13 w-13 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
      <Link href="/" aria-label="Home" className="pointer-events-auto">
        <Image
          src={image}
          alt={description}
          className="h-12 w-12 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
          priority
        />
      </Link>
    </div>
  )
}

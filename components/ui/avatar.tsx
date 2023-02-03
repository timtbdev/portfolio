import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface AvatarProps {
  image: StaticImageData
  description: string
  large?: boolean
}

export function Avatar({ large = false, image, description }: AvatarProps) {
  return (
    <div
      className={clsx(
        large ? 'h-20 w-20' : 'h-13 w-13',
        'rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
    >
      <Link href="/" aria-label="Home" className="pointer-events-auto">
        <Image
          src={image}
          alt={description}
          className={clsx(
            large ? 'h-19 w-19' : 'h-12 w-12',
            'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
          )}
          priority
        />
      </Link>
    </div>
  )
}

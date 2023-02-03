import { Menu } from '@/types'
import Link from 'next/link'
import { clsx } from 'clsx'

interface NavigationProps {
  pathName: string | null
  menu: Menu[]
}

export function Navigation({ pathName, menu }: NavigationProps) {
  return (
    <>
      {menu.map(({ url, title, idx }) => (
        <Link
          href={url}
          key={idx}
          className={clsx(
            pathName == url
              ? 'border-b border-zinc-900 text-zinc-900 dark:border-orange-500 dark:text-zinc-100'
              : 'border-transparent text-gray-900 hover:text-gray-500 dark:text-zinc-100 dark:hover:text-orange-500',
            'inline-flex items-center px-1 py-1 text-base font-medium transition duration-500 ease-in-out'
          )}
        >
          {title}
        </Link>
      ))}
    </>
  )
}

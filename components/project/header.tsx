import { FC } from 'react'
import dateFormat from 'date-fns/format'
import Image from 'next/image'

interface HeaderProps {
  title: string
  releaseDate: string
  icon: string
  iconDescription: string
  type: string
}

export function Header({
  title,
  releaseDate,
  icon,
  iconDescription,
  type,
}: HeaderProps) {
  return (
    <>
      <div
        className="border-b border-zinc-200 pb-3
       dark:border-slate-700/40"
      >
        <div className="sm:mt-10 sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="mx-auto h-20 w-20 flex-shrink-0 rounded-full">
              <span className="sr-only">{iconDescription}</span>
              <Image
                className="rounded-full"
                src={icon}
                width={80}
                height={80}
                alt={iconDescription}
                priority
              />
            </div>

            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="inline-flex text-sm font-medium text-gray-500 dark:text-zinc-400">
                {type}
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-zinc-100 sm:text-2xl">
                {title}
              </p>

              <p className="text-sm font-medium text-gray-500 dark:text-zinc-400">
                {dateFormat(new Date(releaseDate), 'MMMM yyyy')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

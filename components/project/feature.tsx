import { FC } from 'react'

interface FeatureProps {
  title: string
  description: string
}

export function Feature({ title, description }: FeatureProps) {
  return (
    <>
      <div key={title} className="flex flex-col gap-0.5">
        <p className="text-lg font-semibold leading-6 text-gray-900 dark:text-zinc-200">
          {title}
        </p>
        <dd className="text-medium text-gray-900 dark:text-zinc-400">
          {description}
        </dd>
      </div>
    </>
  )
}

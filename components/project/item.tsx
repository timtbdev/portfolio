import { FC } from 'react'
import { Feature } from '@/components/project/feature'
import { Slider } from '@/components/project/slider'
import { Header } from '@/components/project/header'
import { Project } from '../../types'

interface ItemProps {
  item: Project
  idx: number
}

export function Item({ item, idx }: ItemProps) {
  return (
    <>
      <div
        key={idx}
        className="relative mt-4 sm:mx-6 md:mx-10 lg:mx-12 lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div className="overflow-hidden">
          <h2 className="sr-only" id={item.title}>
            Project Overview
          </h2>
          <Header
            title={item.title}
            releaseDate={item.releaseDate}
            icon={item.icon}
            iconDescription={item.iconDescription}
            type={item.type}
          />

          <div className="mx-5 mt-6 flex flex-col gap-4  sm:mx-0 ">
            <div className="text-medium mb-2 text-gray-900 dark:text-zinc-400">
              {item.text}
            </div>

            {item.features.map((feature, idx) => (
              <Feature
                key={ idx}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        <div className="relative mt-10 lg:mt-0">
          <Slider images={item.images} />
        </div>
      </div>
    </>
  )
}

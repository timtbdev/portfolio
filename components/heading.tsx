import { heading } from '@/config/heading'
import { Avatar } from '@/components/ui/avatar'
import { profile } from '@/config/profile'
import ProfileImage from '@/public/profile.jpg'

export function Heading() {
  return (
    <>
      <>
        <div className="my-8 flex flex-col place-items-center gap-6">
          <div className="flex justify-center lg:hidden">
            <Avatar
              image={ProfileImage}
              description={profile.imageDescription}
            />
          </div>
          <h2 className="text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-zinc-100">
            {heading.title},
          </h2>
          <h2 className="mx-auto max-w-3xl px-4 text-center text-2xl font-semibold text-gray-600 dark:text-zinc-400">
            <p>{heading.text}</p>
            <p>{heading.subText}</p>
          </h2>
        </div>
      </>
    </>
  )
}

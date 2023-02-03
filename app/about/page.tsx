import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="relative overflow-hidden bg-white py-16 dark:bg-zinc-900">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <Image
              className="w-full rounded-lg"
              src="/me.jpg"
              alt="Profile picture"
              width={1310}
              height={873}
            />
            <h1>
              <span className="mt-5 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-zinc-100 sm:text-4xl">
                Oh Hello there,
              </span>
            </h1>
            <p className="mt-5 indent-8 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              I'm Tim and, I'm a self-taught Android developer based in San
              Francisco. I was born and grew up in Mongolia, and I studied
              Computer Science in Germany. I speak three languages (English,
              German, and Mongolian).
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              I started learning Android development in 2017, and published 2
              Android applications on Google Play Store. I've reached over 40
              stars on my Github repositories.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              In 2019, my mother got sick, so I had to take care of her, and I
              stopped my Android journey for 3 years.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              In 2023, I started learning again modern Android development, and
              I'm sure that I'll launch more apps to help others.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              In my free time, I like to run and travel.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              Thank you.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

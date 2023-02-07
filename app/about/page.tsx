import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="relative overflow-hidden bg-white py-16 dark:bg-zinc-900 ">
        <div className="absolute inset-x-0 top-0 h-[30.5rem] bg-[url('/bg_light.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:border-t dark:border-slate-100/5 dark:bg-[url('/bg_dark.svg')] dark:bg-[center_top_-1px]"></div>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg ">
            <Image
              className="w-full rounded-lg"
              src="/me.jpg"
              alt="Profile picture"
              width={800}
              height={600}
              priority
            />
            <h1>
              <span className="mt-5 block text-left text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-zinc-100 sm:text-4xl">
                Oh hello there,
              </span>
            </h1>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              I'm Tim, a self-taught Android developer based in San Francisco.
              I'm originally from Mongolia. I have a Bachelor degree in Computer
              Science from Germany. I speak three languages (English, German,
              and Mongolian).
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              I've started learning Android development in 2017, and launched 2
              Android applications on Google Play Store. I've reached over 50
              stars on my Github repositories.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              Since then, I've been working on my personal projects.
            </p>

            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              Anyway, that's enough about me.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              What you really want to know is how I can help you. Isn’t it?
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              As well as specialising in Kotlin and Android development, I can
              also create beuatiful websites with NextJs and TailwindCss.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              So what are you waiting for?
            </p>
            <p className="mt-5">
              <a
                href="mailto:timtb@hey.com"
                type="button"
                className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

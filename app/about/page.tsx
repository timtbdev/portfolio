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
              I'm originally from Mongolia and, studied Computer Science in
              Germany. I can speak three languages (English, German, and
              Mongolian).
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              I started learning Android development in 2017 and launched 2
              Android applications on Google Play Store. I've reached over 50
              stars on my Github repositories.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              I enjoy the UI side of Android development to I like to make
              smooth and fun mobile experiences with modern Android tools like
              Jetpack Compose. But, I'm open to trying something new.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              Anyway, that's enough about me.
            </p>
            <p className="mt-5 text-xl leading-8 text-zinc-500 dark:text-zinc-300">
              I'm looking for an entry-level Android engineering role. If you
              think I might be a good fit for your organization, shoot me an
              email at{' '}
              <a
                href="mailto:timtb@hey.com"
                className=" text-orange-600 underline hover:text-zinc-100 hover:no-underline"
              >
                timtb@hey.com
              </a>{' '}
              and let's chat.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

import { footer } from '@/config/footer'

export function Footer() {
  return (
    <>
      <footer className="mx-auto max-w-full overflow-hidden border-t border-zinc-200 py-12 px-4 dark:border-zinc-700/40 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {footer.socials.map(({ title, url }) => (
            <div key={title} className="px-5 py-2">
              <a
                href={url}
                className="text-base text-gray-900 transition duration-500 ease-in-out hover:text-gray-500 dark:text-zinc-100 dark:hover:text-orange-500"
              >
                {title}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base font-light text-gray-500 dark:text-zinc-500">
          {footer.lastUpdated}
        </p>
      </footer>
    </>
  )
}

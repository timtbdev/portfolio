'use client'
import { Avatar } from '@/components/ui/avatar'
import { Toggle } from '@/components/toggle'
import { Navigation } from '@/components/navigation'
import { usePathname } from 'next/navigation'
import { menu } from '@/config/menu'
import { profile } from '@/config/profile'
import ProfileImage from '@/public/profile.jpg'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export function Header() {
  const pathName = usePathname()
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="relative isolate border-b border-zinc-200 px-6 pb-5 pt-6 dark:border-zinc-700/40 lg:px-8">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                <Avatar
                  image={ProfileImage}
                  description={profile.imageDescription}
                />
              </div>
              <div className="flex flex-1 lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  p-2 
                  text-gray-900
                  shadow-lg 
                  shadow-zinc-800/5
                  ring-1
                  ring-zinc-900/10
                  hover:text-zinc-900
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  dark:bg-zinc-700
                  dark:text-zinc-400
                  dark:ring-zinc-600"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden gap-x-12 lg:flex">
                <Navigation pathName={pathName} menu={menu} />
              </div>
              <div className="flex flex-1 justify-end">
                <Toggle />
              </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 border-b border-zinc-200 px-3 py-3 dark:border-zinc-700/40">
              {menu.map((item) => (
                <Disclosure.Button
                  key={item.idx}
                  as="a"
                  href={item.url}
                  className={clsx(
                    item.url == pathName
                      ? 'bg-gray-900 text-white dark:bg-zinc-700'
                      : 'text-gray-900 hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-zinc-700',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.url == pathName ? 'page' : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

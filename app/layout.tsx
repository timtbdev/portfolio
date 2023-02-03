import '@/styles/tailwind.css'
import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="bg-zinc-50 antialiased dark:bg-zinc-800">
        <div className="max-w-7x mx-auto">
          <div className="mx-auto max-w-5xl border border-zinc-200 bg-white shadow-lg shadow-zinc-800/5 dark:border-zinc-700/40 dark:bg-zinc-900">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        <Analytics />
        <TailwindIndicator />
      </body>
    </html>
  )
}

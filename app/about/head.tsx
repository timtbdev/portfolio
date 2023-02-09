import { aboutConfig } from '@/config/about'

export default function Head() {
  return (
    <>
      <title>{aboutConfig.title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={aboutConfig.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={aboutConfig.title} />
      <meta property="og:description" content={aboutConfig.description} />
      <meta property="og:url" content={aboutConfig.url} />
      <meta
        property="og:image"
        content="https://portfolio-timtbdev.vercel.app/og.png"
      />
      <meta name="twitter:title" content={aboutConfig.title} />
      <meta name="twitter:description" content={aboutConfig.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={aboutConfig.url} />
      <meta
        name="twitter:image"
        content="https://portfolio-timtbdev.vercel.app/og.png"
      />
    </>
  )
}

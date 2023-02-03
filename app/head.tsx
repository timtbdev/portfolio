import { homeConfig } from '@/config/home'

export default function Head() {
  return (
    <>
      <title>{homeConfig.title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={homeConfig.description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={homeConfig.title} />
      <meta property="og:description" content={homeConfig.description} />
      <meta property="og:url" content={homeConfig.url} />
      <meta property="og:image" content={homeConfig.og} />
      <meta name="twitter:title" content={homeConfig.title} />
      <meta name="twitter:description" content={homeConfig.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={homeConfig.url} />
      <meta name="twitter:image" content={homeConfig.og} />
    </>
  )
}

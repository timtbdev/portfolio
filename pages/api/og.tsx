import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import Image from 'next/image'

export const config = {
  runtime: 'edge',
}

const interRegular = fetch(
  new URL('../../assets/fonts/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(
  new URL('../../assets/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const fontRegular = await interRegular
  const fontBold = await interBold

  const { searchParams } = new URL(req.url)

  const hasTitle = searchParams.has('title')
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'Oh Hello there,'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div tw="flex flex-col mx-auto max-w-7xl text-center items-center justify-center">
          <img
            tw="mx-auto h-56 w-56 rounded-full"
            src="https://avatars.githubusercontent.com/u/25026241?v=4"
            height={240}
            width={240}
            alt=""
          />
          <h2
            tw="text-5xl mt-10 font-bold tracking-tight"
            style={{
              fontFamily: 'Inter',
              fontWeight: 'bolder',
            }}
          >
            {title}
          </h2>
          <p
            tw="text-3xl text-gray-500"
            style={{
              fontFamily: 'Inter',
              fontWeight: 'bolder',
            }}
          >
            I am Tim, and I am an Android Developer.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  )
}

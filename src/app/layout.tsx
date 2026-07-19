import type { Metadata } from 'next'
import { Bai_Jamjuree as BaiJamjuree, Roboto } from 'next/font/google'
import { cookies } from 'next/headers'

import { Copyright } from '@/src/components/Copyright'
import { Hero } from '@/src/components/Hero'
import { Profile } from '@/src/components/Profile'
import { SignIn } from '@/src/components/SignIn'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'Spacetime',
  description:
    'A time capsule built with React, Next.js, TailwindCSS, and TypeScript',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isAuthenticated = (await cookies()).has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            <div className="blur-full absolute top-1/2 right-0 h-72 w-131.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700 opacity-50" />
            <div className="bg-stripes absolute top-0 right-2 bottom-0 w-2" />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

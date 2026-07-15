import { User } from 'lucide-react'
import Image from 'next/image'

import logoImage from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="blur-full absolute top-1/2 right-0 h-72 w-131.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700 opacity-50" />
        <div className="bg-stripes absolute top-0 right-2 bottom-0 w-2" />
        <a
          href="#application"
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-35 text-sm leading-snug">
            <span className="underline">Sign up</span> and save your memories!
          </p>
        </a>
        <div className="space-y-5">
          <Image src={logoImage} alt="Spacetime" />
          <div className="max-w-105 space-y-1">
            <h1 className="text-5xl leading-tight font-bold text-gray-50">
              Your time capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Collect memorable moments from your journey and share them (if you
              wish) with the world!
            </p>
          </div>
          <a
            href="#application"
            className="font-heading inline-block rounded-full bg-green-500 px-5 py-3 text-sm leading-none text-black uppercase hover:bg-green-600"
          >
            SAVE MEMORY
          </a>
        </div>
        <div className="text-sm leading-relaxed text-gray-200">
          Made with 💕 by{' '}
          <a
            target="_blank"
            className="underline hover:text-gray-100"
            href="https://personal-portfolio-sand-three-75.vercel.app/"
            rel="noreferrer"
          >
            me
          </a>
        </div>
      </div>
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-90 text-center leading-relaxed">
            You have not recorded any memories yet, start{' '}
            <a href="#application" className="underline hover:text-gray-50">
              creating now
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}

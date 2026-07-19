import Image from 'next/image'
import Link from 'next/link'

import logoImage from '@/src/assets/nlw-spacetime-logo.svg'

export function Hero() {
  return (
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
      <Link
        href="/memories/new"
        className="font-heading inline-block rounded-full bg-green-500 px-5 py-3 text-sm leading-none text-black uppercase hover:bg-green-600"
      >
        SAVE MEMORY
      </Link>
    </div>
  )
}

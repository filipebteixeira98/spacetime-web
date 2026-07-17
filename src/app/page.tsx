import { cookies } from 'next/headers'

import { Copyright } from '@/src/components/Copyright'
import { EmptyMemories } from '@/src/components/EmptyMemories'
import { Hero } from '@/src/components/Hero'
import { Profile } from '@/src/components/Profile'
import { SignIn } from '@/src/components/SignIn'

export default async function Home() {
  const isAuthenticated = (await cookies()).has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="blur-full absolute top-1/2 right-0 h-72 w-131.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700 opacity-50" />
        <div className="bg-stripes absolute top-0 right-2 bottom-0 w-2" />
        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}

import Image from 'next/image'

import { getUser } from '@/src/lib/auth'

export async function Profile() {
  const { name, avatarUrl } = await getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-35 text-sm leading-snug">
        {name}
        <a
          href="/application"
          className="block text-red-400 hover:text-red-300"
        >
          Log out
        </a>
      </p>
    </div>
  )
}

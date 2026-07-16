export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-90 text-center leading-relaxed">
        You have not recorded any memories yet, start{' '}
        <a href="#application" className="underline hover:text-gray-50">
          creating now
        </a>
        !
      </p>
    </div>
  )
}

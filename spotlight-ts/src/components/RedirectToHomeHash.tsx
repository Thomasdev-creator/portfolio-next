'use client'

import { useEffect } from 'react'

export function RedirectToHomeHash({ id }: { id: string }) {
  useEffect(() => {
    let hash = id.startsWith('#') ? id : `#${id}`
    window.location.replace(`/${hash}`)
  }, [id])

  return (
    <p className="px-6 py-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
      Redirecting…
    </p>
  )
}

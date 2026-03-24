import { type Metadata } from 'next'

import { RedirectToHomeHash } from '@/components/RedirectToHomeHash'

export const metadata: Metadata = {
  title: 'Links',
  description: 'Social links and contact.',
}

export default function Links() {
  return <RedirectToHomeHash id="links" />
}

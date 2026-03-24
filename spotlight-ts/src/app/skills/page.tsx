import { type Metadata } from 'next'

import { RedirectToHomeHash } from '@/components/RedirectToHomeHash'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Software I use, gadgets I love, and workflows I recommend.',
}

export default function Skills() {
  return <RedirectToHomeHash id="skills" />
}

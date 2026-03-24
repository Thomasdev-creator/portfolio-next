import { type Metadata } from 'next'

import { RedirectToHomeHash } from '@/components/RedirectToHomeHash'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return <RedirectToHomeHash id="projects" />
}

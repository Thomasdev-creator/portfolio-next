import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function AboutSocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

const sectionScroll =
  'scroll-mt-28 sm:scroll-mt-32'

export function AboutStoryParagraphs({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'space-y-7 text-base text-zinc-600 dark:text-zinc-400',
        className,
      )}
    >
      <p>
        I’ve loved making things for as long as I can remember, and wrote my
        first program when I was 6 years old, just two weeks after my mom
        brought home the brand new Macintosh LC 550 that I taught myself to
        type on.
      </p>
      <p>
        The only thing I loved more than computers as a kid was space. When I was
        8, I climbed the 40-foot oak tree at the back of our yard while wearing
        my older sister’s motorcycle helmet, counted down from three, and
        jumped — hoping the tree was tall enough that with just a bit of
        momentum I’d be able to get to orbit.
      </p>
      <p>
        I spent the next few summers indoors working on a rocket design, while I
        recovered from the multiple surgeries it took to fix my badly broken
        legs. It took nine iterations, but when I was 15 I sent my dad’s
        Blackberry into orbit and was able to transmit a photo back down to our
        family computer from space.
      </p>
      <p>
        Today, I’m the founder of Planetaria, where we’re working on civilian
        space suits and manned shuttle kits you can assemble at home so that the
        next generation of kids really <em>can</em> make it to orbit — from the
        comfort of their own backyards.
      </p>
    </div>
  )
}

export function HomePageSections() {
  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className={sectionScroll}
      >
        <Container className="mt-16 sm:mt-32">
          <header className="max-w-2xl">
            <h2
              id="projects-heading"
              className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
            >
              Things I’ve made trying to put my dent in the universe.
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’ve worked on tons of little projects over the years but these
              are the ones that I’m most proud of. Many of them are open-source,
              so if you see something that piques your interest, check out the
              code and contribute if you have ideas for how it can be improved.
            </p>
          </header>
          <ul
            role="list"
            className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h3>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            ))}
          </ul>
        </Container>
      </section>

      <section
        id="skills"
        aria-labelledby="skills-heading"
        className={sectionScroll}
      >
        <Container className="mt-16 sm:mt-32">
          <header className="max-w-2xl">
            <h2
              id="skills-heading"
              className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
            >
              Software I use, gadgets I love, and workflows I recommend.
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I get asked a lot about the things I use to build software, stay
              productive, or buy to fool myself into thinking I’m being productive
              when I’m really just procrastinating. Here’s a big list of all of
              my favorite stuff.
            </p>
          </header>
          <div className="mt-16 space-y-20 sm:mt-20">
            <ToolsSection title="Workstation">
              <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
                I was using an Intel-based 16” MacBook Pro prior to this and the
                difference is night and day. I’ve never heard the fans turn on a
                single time, even under the incredibly heavy loads I put it
                through with our various launch simulations.
              </Tool>
              <Tool title="Apple Pro Display XDR (Standard Glass)">
                The only display on the market if you want something HiDPI and
                bigger than 27”. When you’re working at planetary scale, every
                pixel you can get counts.
              </Tool>
              <Tool title="IBM Model M SSK Industrial Keyboard">
                They don’t make keyboards the way they used to. I buy these any
                time I see them go up for sale and keep them in storage in case
                I need parts or need to retire my main.
              </Tool>
              <Tool title="Apple Magic Trackpad">
                Something about all the gestures makes me feel like a wizard
                with special powers. I really like feeling like a wizard with
                special powers.
              </Tool>
              <Tool title="Herman Miller Aeron Chair">
                If I’m going to slouch in the worst ergonomic position
                imaginable all day, I might as well do it in an expensive chair.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Development tools">
              <Tool title="Sublime Text 4">
                I don’t care if it’s missing all of the fancy IDE features
                everyone else relies on, Sublime Text is still the best text
                editor ever made.
              </Tool>
              <Tool title="iTerm2">
                I’m honestly not even sure what features I get with this that
                aren’t just part of the macOS Terminal but it’s what I use.
              </Tool>
              <Tool title="TablePlus">
                Great software for working with databases. Has saved me from
                building about a thousand admin interfaces for my various
                projects over the years.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Design">
              <Tool title="Figma">
                We started using Figma as just a design tool but now it’s become
                our virtual whiteboard for the entire company. Never would have
                expected the collaboration features to be the real hook.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Productivity">
              <Tool title="Alfred">
                It’s not the newest kid on the block but it’s still the fastest.
                The Sublime Text of the application launcher world.
              </Tool>
              <Tool title="Reflect">
                Using a daily notes system instead of trying to keep things
                organized by topics has been super powerful for me. And with
                Reflect, it’s still easy for me to keep all of that stuff
                discoverable by topic even though all of my writing happens in
                the daily note.
              </Tool>
              <Tool title="SavvyCal">
                Great tool for scheduling meetings while protecting my calendar
                and making sure I still have lots of time for deep work during
                the week.
              </Tool>
              <Tool title="Focus">
                Simple tool for blocking distracting websites when I need to just
                do the work and get some momentum going.
              </Tool>
            </ToolsSection>
            <div
              id="links"
              className={clsx(
                sectionScroll,
                'grid max-w-3xl grid-cols-1 gap-y-8 md:grid-cols-4 md:items-baseline',
              )}
            >
              <div className="hidden md:col-span-1 md:block" aria-hidden="true" />
              <div className="md:col-span-3">
                <ul role="list">
                  <AboutSocialLink
                    href="https://www.instagram.com/thomas_fournierr_/"
                    icon={InstagramIcon}
                    className="mt-4"
                  >
                    Follow on Instagram
                  </AboutSocialLink>
                  <AboutSocialLink
                    href="https://github.com/Thomasdev-creator"
                    icon={GitHubIcon}
                    className="mt-4"
                  >
                    Follow on GitHub
                  </AboutSocialLink>
                  <AboutSocialLink
                    href="https://www.linkedin.com/in/thomas-fournier-287a36292/"
                    icon={LinkedInIcon}
                    className="mt-4"
                  >
                    Follow on LinkedIn
                  </AboutSocialLink>
                  <AboutSocialLink
                    href="mailto:thomasfournierbrest@gmail.com"
                    icon={MailIcon}
                    className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                  >
                    thomasfournierbrest@gmail.com
                  </AboutSocialLink>
                </ul>
                <Button
                  href="#"
                  variant="secondary"
                  className="group mt-6 w-full"
                >
                  Download CV
                  <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

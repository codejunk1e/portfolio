import Link from 'next/link'
import type { Metadata } from 'next'
import { projects, personalProjects } from './project-data'
import { getProjectPosts } from '@/app/lib/posts'
import { Tilt } from '@/components/motion-primitives/tilt'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Nextfolio Projects',
}

export default function Projects() {
  return (
    <div className="space-y-24">
      <PersonalProjects/>
      <CompanyProjects/>
    </div>
  )
}

function PersonalProjects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Personal Projects & Case studies</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {personalProjects.map((project, index) => (
          <TiltCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            url={project.url}
            target={project.target}
          />
        ))}
      </div>
    </section>
  )
}

function CompanyProjects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Company Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <TiltCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            url={project.url}
            target={project.target}
          />
        ))}
      </div>
    </section>
  )
}

type TiltCardProps = {
  image: string
  title: string
  description: string
  url: string
  target?: '_blank' | '_self'
}

function TiltCard({ image, title, description, url, target = '_blank' }: TiltCardProps) {
  return (
    <Link href={url} target={target} className="cursor-pointer">
      <Tilt rotationFactor={8} isRevese>
        <div
          style={{
            borderRadius: '12px',
          }}
          className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900">
          <img src={image} alt={title} className="h-48 w-full object-cover" />
          <div className="p-2">
            <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
              {title}
            </h1>
            <p className="text-zinc-700 dark:text-zinc-400">{description}</p>
          </div>
        </div>
      </Tilt>
    </Link>
  )
}

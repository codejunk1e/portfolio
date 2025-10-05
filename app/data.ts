// Get basePath from Next.js environment variable (configured in next.config.js)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

type Project = {
  name: string
  description: string
  link: string
  url: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Grey Finance',
    description:
      'Fintech app for sending and reciving money from different currencies',
    link: 'https://play.google.com/store/apps/details?id=co.grey.mobile.android&hl=en&pli=1',
    url: `${basePath}/grey.png`,
    id: 'project1',
  },
  {
    name: 'JustEase',
    description: 'App to educate and enlightenment citizens about their rights and duties',
    link: 'https://play.google.com/store/apps/details?id=com.lawpavilion.lr&hl=en',
    url: `${basePath}/justease.png`,
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Grey Finance',
    title: 'Senior Mobile Android & iOS Engineer',
    start: '2022',
    end: 'Present',
    link: 'https://grey.co',
    id: 'work1',
  },
  {
    company: 'Cavista',
    title: 'Android Engineer',
    start: '2021',
    end: '2022',
    link: 'https://www.cavistaholdings.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Android Engineer',
    start: '2019',
    end: '2022',
    link: 'https://www.linkedin.com/in/innaemeka/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'CV',
    link: 'https://docs.google.com/document/d/1tOH9gZ97umrfXONVOGcVNZsyIV9RBS9ebGAwSsuHX5w/preview?tab=t.0',
  },
  {
    label: 'Github',
    link: 'https://github.com/codejunk1e',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/dev_padawan',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/innaemeka/',
  }
]

export const EMAIL = 'nnaemekaigboanyika@gmail.com'

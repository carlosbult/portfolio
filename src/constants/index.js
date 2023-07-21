import { instagram, twitter, linkedin } from '../assets'
import { projects } from './projects'
import { experiences } from './experiences'
import { technologies } from './technologies'
import { services } from './services'

export const socialMedia = [
  {
    id: 'instagram',
    icon: instagram,
    link: 'https://www.instagram.com/carlosbult/'
  },
  {
    id: 'twitter',
    icon: twitter,
    link: 'https://twitter.com/CarlosBult'
  },
  {
    id: 'linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/carlosbult/'
  }
]

export const navLinks = [
  {
    id: 'about',
    title: 'nav-bar.about'
  },
  {
    id: 'projects',
    title: 'nav-bar.projects'
  },
  {
    id: 'contact',
    title: 'nav-bar.contact'
  }
]

export { services, technologies, experiences, projects }

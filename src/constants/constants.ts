import { Github, Home, Book } from 'lucide-vue-next'

const NAVIGATION = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Book },
  { name: 'Github', path: 'https://github.com/itsarman001', icon: Github, isExternal: true },
]

export { NAVIGATION }

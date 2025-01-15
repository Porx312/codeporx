import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import HomeMain from '@/components/home/Home'
import SkillsSlider from '@/components/home/Skills'

const MAX_DISPLAY = 2

export default function Home({ posts }) {
  return (
    <>
      <HomeMain />
      <SkillsSlider />
    </>
  )
}

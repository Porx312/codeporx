import HomeMain from '@/components/home/Home'
import SkillsSlider from '@/components/home/Skills'
import Project from '@/components/home/Projects'
import StudyTimeline from '@/components/home/StudyTimeLine'
import AboutMe from '@/components/home/Aboutme'
import Contact from '@/components/home/Contact'
import StickyMenu from '@/components/home/MenuSticky'
import ProjectCard from '@/components/home/IdestorexPromo'
import ProjectCardBanner from '@/components/home/idebanner'

const MAX_DISPLAY = 2

export default function Home({ posts }) {
  return (
    <>
      <StickyMenu />
      <HomeMain />
      <SkillsSlider />
      <ProjectCardBanner/>
      <StudyTimeline />
      <Project />
      <AboutMe />
      <Contact />
    </>
  )
}

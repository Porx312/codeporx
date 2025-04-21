import HomeMain from '@/components/home/Home'
import SkillsSlider from '@/components/home/Skills'
import Project from '@/components/home/Projects'
import StudyTimeline from '@/components/home/StudyTimeLine'
import AboutMe from '@/components/home/Aboutme'
import Contact from '@/components/home/Contact'
import StickyMenu from '@/components/home/MenuSticky'
import ProjectCardBanner from '@/components/home/idebanner'

export default function Home() {
  return (
    <>
      <StickyMenu />
      <HomeMain />
      <SkillsSlider />
      <ProjectCardBanner />
      <StudyTimeline />
      <Project />
      <AboutMe />
      <Contact />
    </>
  )
}

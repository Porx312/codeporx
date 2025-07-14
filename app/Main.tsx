import HomeMain from '@/components/home/Home'
import SkillsSlider from '@/components/home/Skills'
import Project from '@/components/home/Projects'
import StudyTimeline from '@/components/home/StudyTimeLine'
import AboutMe from '@/components/home/Aboutme'
import Contact from '@/components/new/Contact'
import StickyMenu from '@/components/new/MenuSticky'
import ProjectCardBanner from '@/components/home/idebanner'
import Skills from '@/components/new/Skills'
import Portfolio from '@/components/new/portfolio'

export default function Home() {
  return (
    <>
    <StickyMenu />
    <Portfolio/>
    {/* 
      <HomeMain />
      <SkillsSlider />s
      <ProjectCardBanner />
      <StudyTimeline />
      <Project />
      <AboutMe />
      <Contact /> */}
    </>
  )
}

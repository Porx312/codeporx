import React from 'react'

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express", "React", "Next.js",
  "Tailwind CSS", "SEO", "SEM", "SQL", "MongoDB", "Git", "GitHub"
]

export default function SkillsSlider() {
  return (
    <div className="w-full overflow-hidden py-10">
      <div className="skills-slider">
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}


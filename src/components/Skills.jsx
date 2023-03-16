import React from 'react'
import skillsList from '../data/skillsList'

const Skills = () => {
  return (
    <section id='skills' name='skills' className='container' style={{"display": "grid"}}>
      <h2>Things I can do</h2>
      <ul className="grid">
        {skillsList.map((skill, index) => {
          return (
            <li key={index}>
              <img src={skill.src} alt="commet" loading="lazy"/>
              <h3>{skill.title}</h3>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
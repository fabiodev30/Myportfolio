import React from 'react'
import Card from './UI/Card'
import CardSkill from './UI/CardSkill'
import Divider from './UI/Divider'

const Skills = (props) => {
  return (
    <div className="container text-white">
      <h1 className="text-center pt-5">MY SKILLS</h1>
      <div>
        <Divider />
      </div>
      <div class="row row-cols-2 pt-1 pb-5">
      {props.listaskills.map((skill) =>
        <div class="col">
                  <CardSkill name={skill}/>
        </div>
      )}
      </div>
    </div>
  )
}

export default Skills
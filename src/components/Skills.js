import React from 'react'
import CardSkill from './UI/CardSkill'
import Divider from './UI/Divider'

const Skills = (props) => {
  return (
    <div className="container text-white">
      <h1 className="text-center pt-5">MY SKILLS</h1>
      <div>
        <Divider />
      </div>
      <div className="row row-cols-2 pt-1 pb-4">
      {props.listaskills.map((skill,index) =>
        <div className="col" key={index}>
                  <CardSkill name={skill}/>
        </div>
      )}
      </div>
    </div>
  )
}

export default Skills
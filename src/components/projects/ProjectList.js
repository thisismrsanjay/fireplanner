import React from 'react';
import ProjectSummary from './ProjectSummary';



//by default argument is props  destructuring  projects 
export default function ProjectList({projects}) {
  return (
    <div className="project-list ">
    {projects && projects.map(project=>{
       return <ProjectSummary key={project.id} project={project}/>
    })}
     
    </div>
  )
}

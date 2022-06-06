import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import projectData from "../projectInfo"

export default function ProjectPage() {

    const [currentProject, setCurrentProject] = useState({})

    const { id } = useParams()


    const getCurrentProject = () => {
        projectData.projects.find(project => {
        if (project.id === id) {
            setCurrentProject(project)
        }
    })
}

    useEffect(() => {
        getCurrentProject()
    }, [])

    return (
        <>
        <h2 style={{color: 'black'}}>Project Page</h2>
        <h2 style={{color: 'black'}}>{currentProject.title}</h2>
        </>
    )
}
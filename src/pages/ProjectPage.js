import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import SplitifyProjectPage from './SplitifyProjectPage';
import projectData from "../projectInfo"
import AboutMe from './AboutMe.js'; // Just as placeholder
import './ProjectPage.css'

export default function ProductPage() {

    const [currentProject, setCurrentProject] = useState({})

    const getCurrentProjectData = () => {
        projectData.projects.find(project => {
            if (project.id === id) {
                setCurrentProject(project)
            }
        })
    }

    useEffect(() => {
        getCurrentProjectData()
    }, [])

    const { id } = useParams()

    const getCurrentProject = (id) => {
        if (id === '000') {
            return <SplitifyProjectPage currentProject={currentProject}/>
        }
        if (id === '001') {
            return <AboutMe currentProject={currentProject}/>
        }
        if (id === '002') {
            return <AboutMe currentProject={currentProject}/>
        }
        if (id === '003') {
            return <AboutMe currentProject={currentProject}/>
        }
    }

    return (
        <>
            {getCurrentProject(id)}
        </>
    )
}
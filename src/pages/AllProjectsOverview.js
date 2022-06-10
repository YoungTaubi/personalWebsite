import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import ProjectTile from '../components/ProjectTile'
import projectInfoData from "../projectInfo"

export default function AllProjectsOverview() {

    const [projectData, setProjectData] = useState(projectInfoData.projects)
    const [filterWindow, setFilterWindow] = useState(false)
    const [programmingState, setProgrammingState] = useState(false)
    const [industrialDesignState, setIndustrialDesignState] = useState(false)
    const [personalProjectState, setPersonalProjectState] = useState(false)

    const handleLastProjectTile = (index) => {
        if (filteredProjectData.length % 2 !== 0 && index === filteredProjectData.length - 1) {
            return true
        } else {
            return false
        }
    }

    const filteredProjectData = projectData.filter(project => {
        if (programmingState || industrialDesignState || personalProjectState) {
            if (programmingState && project.type === 'Programming') {
                return true
            }
            if (industrialDesignState && project.type === 'Indusrial Design') {
                return true
            }
            if (personalProjectState && project.type === 'Personal Project') {
                return true
            }
        } else {
            return true
        }
    })

    return (
        <>
            <div
                className={filterWindow ? 'filterSlider open' : 'filterSlider'}
                onMouseEnter={() => setFilterWindow(true)}
                onMouseLeave={() => setFilterWindow(false)}
            >
                {
                    !filterWindow && <p
                        style={{
                            transform: 'rotate(270deg)',
                            fontSize: '0.6em',
                            position: 'absolute',
                            right: '-8px',
                            color: 'white',
                            'fontFamily': 'Be Vietnam Pro'
                        }}>Filter</p>

                }
                {
                    filterWindow &&
                    <>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        >
                            <button
                                onClick={() => setProgrammingState(!programmingState)}
                                className={programmingState ? 'button buttonClicked' : 'button'}
                            >
                                Programming</button>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                        >
                            <button
                                onClick={() => setIndustrialDesignState(!industrialDesignState)}
                                className={industrialDesignState ? 'button buttonClicked' : 'button'}
                            >
                                Industrial Design</button>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                        >
                            <button
                                onClick={() => setPersonalProjectState(!personalProjectState)}
                                className={personalProjectState ? 'button buttonClicked' : 'button'}
                            >
                                Personal Project</button>
                        </motion.div>

                    </>
                }

            </div>
            <div className='projectTileContainer'>
                {filteredProjectData.map((project, index) => (
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.15 * index, }}
                        key={project.title}
                    >
                        <Link to={`/projects/${project.id}`}>
                            <ProjectTile
                                projectTitle={project.title}
                                projectType={project.type}
                                imageURL={project.introImageURL}
                                index={index}
                                setTileFullWidth={handleLastProjectTile(index)}
                            />
                        </Link>
                    </motion.div>
                ))}
                <div style={{minHeight: '100px', width: '100vw'}}></div>
            </div>           
        </>
    )
}
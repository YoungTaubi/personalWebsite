import { useState } from "react"
import { motion } from "framer-motion"

export default function ProjectTile({ projectTitle, projectType, setTileFullWidth, imageURL }) {

    const [mouseHover, setMouseHover] = useState(false)

    const handleMouseHover = () => {
        setMouseHover(!mouseHover)
    }
   
    return (
        <div className="projectTile" style={{ width: setTileFullWidth && '92vw', backgroundImage: `url(${imageURL})` }} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
            {
                mouseHover &&
                <>
                    <div className="darkOverlay">
                        <motion.div
                            initial={{ y: -70 }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween", stiffness: 100 }}
                        >
                            <h5 className="projectDescription fontWeight500 underline">{projectTitle}</h5>
                        </motion.div>
                        <motion.div
                            initial={{ y: 70 }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween", stiffness: 100 }}
                        >
                            <h5 className="projectDescription fontWeight100">{projectType}</h5>
                        </motion.div>
                    </div>
                </>
            }

        </div>
    )
}
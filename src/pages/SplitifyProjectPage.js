import TryMobileApp from "../components/TryMobileApp"
import HeaderImage from "../components/HeaderImage"
import ImagePlusTextCarousel from "../components/ImagePlusTextCarousel.tsx"
import { motion } from "framer-motion"


export default function ProjectPage({ currentProject }) {

    return (
        <>
            <div className="projectPageContainer">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <HeaderImage
                        introImageURL={currentProject.introImageURL} />
                </motion.div>
                <div className="descriptionContainer">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: '0.4s' }}
                    >
                        <h2 className="gradient">{currentProject.title}</h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: '0.8s' }}
                    >
                        <p style={{ fontSize: '16pt' }}>Splitify is a vacation split app designed to help keep track of finances.<br />
                            It´s using React, Framer Motion, Socket.io, Express.js, and MongoDB.
                        </p>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, duration: 0.4 }}
                    >
                        <div className="imageCarouselContainer">
                            <ImagePlusTextCarousel
                                carouselImages={currentProject.carouselImages}
                                height={700}
                            />
                        </div>
                    </motion.div>
                </div>
                <motion.div
                style={{minWidth: '100%', boxSizing: 'border-box'}}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <div className="tryItYourSelfContainer">
                        <h2 className="tryItYourSelfHeadline">Try it your self!</h2>
                        <div className="tryMobileAppContainer">
                            <TryMobileApp />
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
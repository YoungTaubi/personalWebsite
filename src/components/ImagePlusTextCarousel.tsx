import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion";
import './ImagePlusTextCarousel.css'
import { IoIosArrowForward } from 'react-icons/io'




const imageVariants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 300 : -300,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        };
    }
};

const textVariants = {
    enter: (direction: number) => {
        return {
            y: direction > 0 ? -300 : 300,
            x: 0,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        y: 0,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            y: direction < 0 ? -300 : 300,
            x: 0,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function ImageCarousel({ width, height, carouselImages }) {

    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, carouselImages?.length, page);

    const textIndex = wrap(0, carouselImages?.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };



    const TextComponent = () => (
        <motion.div
            className="text"
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
        >
            <p>{carouselImages[textIndex].description}</p>
        </motion.div>
    )

    return (
        <>
            {carouselImages &&
                <div className="imageAndTextContainer">
                    <div className="textContainer">
                        <AnimatePresence initial={false}>
                            <TextComponent key={textIndex + 'Text'} />
                        </AnimatePresence>
                    </div>
                    <div className="imageContainer">
                        <AnimatePresence>
                            <motion.img
                                style={{ height: height }}
                                key={page}
                                src={carouselImages[imageIndex].url}
                                custom={direction}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                            />
                        </AnimatePresence>
                    </div>
                    <IoIosArrowForward className="next" onClick={() => paginate(1)} />
                    <IoIosArrowForward className="prev" onClick={() => paginate(-1)} />
                </div>
            }

        </>
    )
}
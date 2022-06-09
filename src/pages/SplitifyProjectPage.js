import TryMobileApp from "../components/TryMobileApp"
import HeaderImage from "../components/HeaderImage"
import ImagePlusTextCarousel from "../components/ImagePlusTextCarousel.tsx"


export default function ProjectPage({ currentProject }) {

    return (
        <>
            <div className="projectPageContainer">
                <HeaderImage
                    introImageURL={currentProject.introImageURL} />
                <div className="descriptionContainer">
                    <h2 className="gradient">{currentProject.title}</h2>
                    <p style={{ fontSize: '16pt' }}>Splitify is a vacation split app designed to help keep track of finances.<br />
                        It´s using React, Framer Motion, Socket.io, Express.js, and MongoDB.
                    </p>
                </div>
                <div>
                    <div className="imageCarouselContainer">
                        <ImagePlusTextCarousel
                            carouselImages={currentProject.carouselImages}
                            height={700}
                        />
                    </div>
                </div>
                <div className="tryItYourSelfContainer">
                    <h2 className="tryItYourSelfHeadline">Try it your self!</h2>
                    <div className="tryMobileAppContainer">
                        <TryMobileApp />
                    </div>
                </div>
            </div>
        </>
    )
}
import TryMobileApp from "../components/TryMobileApp"
import HeaderImage from "../components/HeaderImage"
import ImageCarousel from "../components/ImageCarousel"


export default function ProjectPage({ currentProject }) {

    return (
        <>
            <div className="projectPageContainer">
                <HeaderImage
                    introImageURL={currentProject.introImageURL} />
                <h2>Project Page</h2>
                <h2>{currentProject.title}</h2>
                <div>
                    <div className="imageCarouselContainer">
                        <ImageCarousel
                            carouselImages={currentProject.carouselImages}
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
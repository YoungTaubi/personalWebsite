export default function HeaderImage({ introImageURL }) {

    return (
        <>
            <div className="backgroundImageContainer"
                style={{ backgroundImage: `url(${introImageURL})` }}
            >
            </div>
        </>
    )
}
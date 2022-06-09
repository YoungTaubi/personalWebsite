export default function HeaderImage({ introImageURL }) {

    return (
        <>
            <div className="headerImageContainer"
                style={{ backgroundImage: `url(${introImageURL})` }}
            >
            </div>
        </>
    )
}
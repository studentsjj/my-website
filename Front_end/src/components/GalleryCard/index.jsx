import './gallerycard.scss'
import nina from'../../assets/nina.webp'

function GalleryCard({number, contentTitle, picture_src}) {
    return (
        <>
            <div className='gallerycard__container'>
                <img src = {picture_src} alt=''/>
                <p>{contentTitle}</p> 
                <div className='gallerycard__number'>
                    <span>{number}</span>
                </div>
            </div>
           
        </>
    )
}

export default GalleryCard;
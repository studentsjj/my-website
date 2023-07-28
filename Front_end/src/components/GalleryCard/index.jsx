import './gallerycard.scss';

function GalleryCard({ number, contentTitle, picture_src }) {
    return (
        <>
            <div className='gallerycard__container'>
                <img src={picture_src} alt='' />
                <p>{contentTitle}</p>
            </div>
        </>
    );
}
export default GalleryCard;

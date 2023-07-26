import './flipcard.scss'
import avatar from '../../assets/avatar_portrait.webp'
import portrait from'../../assets/portrait_website.webp'

function flipCard() {

    return (
        <>
            <div className='flipCard'>
            < div className='flipCard__inner'>
                <div className='flipCard__front'>
                    <img  className='avatar' src={avatar} alt ='' />
                </div>
                <div className='flipCard__back'>
                    <img  className='avatar' src={portrait} alt ='' />
                </div>
            </div>
            </div>
        </>
    )
}
export default flipCard;
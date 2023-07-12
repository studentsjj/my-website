import './flipcard.scss'
import avatar from '../../assets/avatar_portrait1.png'
import portrait from'../../assets/portrait.png'

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
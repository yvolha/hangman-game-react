import './gallows.css';

export const Gallows = () => {
    return (
        <div className='gallows-wrapper'>
            <img src='./gallows.png' alt='Gallows image.' className='gallows'/>
            <img src='./head.png' alt='Head.' className='head'/>
            <img src='./body.png' alt='Body.' className='body'/>
            <img src="./extremity-one.png" alt="Left hand." className='left-hand' />
            <img src="./extremity-two.png" alt="Right hand." className='right-hand' />
            <img src="./extremity-one.png" alt="Left leg." className='left-leg' />
            <img src="./extremity-two.png" alt="Right leg." className='right-leg' />
        </div>
    )
}
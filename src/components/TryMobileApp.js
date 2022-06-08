import smartphoneImage from '../images/splitify/Samsung Galaxy S21+ 5G — Black — Shadow.png'

export default function TryMobileApp() {

    return (
        <>
            <div className='smartphoneContainer'> 
                <iframe className="iFrame" title='Try App' src="http://myvacation-app.herokuapp.com/"></iframe>
                <img className='smartphone' alt='Smartphone' src={smartphoneImage} />
            </div>
        </>
    )
}
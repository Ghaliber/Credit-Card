import React from 'react'
import chip from './chip.png'
import logo from './logo.jpg'




const Header = () => {
    return (
        <div>
            <h1 className='title Thick-White' >CREDIT CARD</h1>
            <img src={chip} width='100px' alt='Ora' />
            <div className='Bottom'>
                <div className='Info'>
                    <p className='Golden-Text'> 7253 3256 7895 1245 </p>
                    <div className='Middle-Info'>
                        <p className="Thick-White"> 5422 </p>
                        <div className='Dates'>
                            <p id='Valid'>VALID <br /> THRU</p>
                            <div >
                                <p id='M-Y'>MONTH/YEAR  </p> 
                                
                                <p className="Thick-White"> 11/50 </p>
                            </div>

                        </div>
                        

                    </div>
                    <p className='Thick-White'>CARDHOLDER</p>
                </div>

                <img alt='' src={logo} width='100px' height='150px' />



            </div>

        </div>
    )
}

export default Header
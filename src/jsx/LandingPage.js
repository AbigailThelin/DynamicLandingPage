import React, {Component} from 'react'

import phone from '../assets/phone.svg'

export default class LandingPage extends Component{

    render(){
        return(
            <div className='LandingPage'>

                    {/* header */}
                <div className='header'>

                    <div className='logo'>
                    </div>

                    <div className='info'>
                        <img src={phone} alt='phone' className='phone'/>
                        <p className='text'>Call for more info!</p>
                        <p className='num'>+1 (801) 339-1928</p>
                    </div>

                </div>

                    {/* BODY */}
                <div className='body'>

                </div>

                <div className='footer'>

                </div>
            </div>
        )
    }
}
import React from 'react'
import logo from '../assets/cloud_198113.png';

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <a className='navbar-brand' href='/'><img src={logo} alt='Logo' style={{ marginLeft: '10px', height: '30px', marginRight: '10px' }} />Client Care Centre</a>
            </nav>



        </header>



    </div>
  )
}

export default HeaderComponent
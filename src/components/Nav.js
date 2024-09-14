import React, { useState } from 'react';
import logo from '../images/netflix-logo.webp';
import '../styles/Nav.css';

 function Nav() {
    const [menu,showMenu] =useState(false)

    const handleMenu =()=>{
        showMenu(!menu);
    }

  return (
    <>
    <div className='nav-section'>
        <div className='nav-wrapper'>
            
            <div className='logo'>
                <img src={logo} className='w-[10rem]'/>
                
            </div>

            <div className='nav-links '>
                 {/* <p>Login </p> */}
                {/* <p>Movies</p>
                <p>My List</p> */}
                {/* <img src={search} className='w-[10rem]'/> */}


            </div>

        </div>
        


    </div>
    </>

    
  )
}
export default Nav;
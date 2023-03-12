import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
        <div className='pages'>
            <h3>HomePage</h3>
                <p id='greet-text'>Welcome to our home page! We are absolutely delighted to have you here. Our goal is to provide you with an enjoyable experience and helpful resources.</p>
                <span>
                <Link to='/login'> <button>Login</button></Link>
                <Link to='/signup'><button>Signup</button></Link>
                </span>
            </div>
        
    </>
  )
}

export default HomePage
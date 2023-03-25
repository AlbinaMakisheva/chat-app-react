import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { SignupContext } from '../contexts/AccountsContext';

const LoginPage = () => {

    const [tel, setTel]= useState('');
    const [passwd, setPasswd]= useState('');
    

  return (
    <div className='pages'>
        <h3> Login</h3>
        <>
        <SignupContext.Consumer>
            {({checkUser})=>(
                <form className='flex-vert' >
                    <input className='inputs-signup' type='tel' value={tel} placeholder='Type your phone number' onChange={(e)=> setTel(e.target.value)} required>
                    </input>
                    <input className='inputs-signup' type='password' value={passwd} placeholder='Password' onChange={(e)=> setPasswd(e.target.value)} required>
                    </input>
                    <span>
                    <Link to='/app'>
                    <button className='inputs-signup' onClick={(e)=> {
                        checkUser(tel, passwd, e)}}> Submit</button>
                    </Link>
                    <Link to='/'>
                    <button className='inputs-signup'> Back</button>
                    </Link>
                    </span>
                </form>

            )}
           
        </SignupContext.Consumer>
        </>
    </div>
  )
}

export default LoginPage
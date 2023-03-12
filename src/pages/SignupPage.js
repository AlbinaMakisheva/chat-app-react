import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { SignupContext } from '../contexts/AccountsContext';

const SignupPage = () => {

    const [tel, setTel]= useState(null);
    const [passwd, setPasswd]= useState(null);
    const [name, setName]= useState('');


  return (
    <div className='pages'>
        <h3> Signup</h3>
        <>
        <SignupContext.Consumer>
            {({createUser})=>(
                <form className='flex-vert' >
                    <input className='inputs-signup' type='text' value={name} placeholder='Your name' onChange={(e)=> setName(e.target.value)}>
                    </input>
                    <input className='inputs-signup' type='tel' value={tel} placeholder='Type your phone number' onChange={(e)=> setTel(e.target.value)}>
                    </input>
                    <input className='inputs-signup' type='password' value={passwd} placeholder='Password' onChange={(e)=> setPasswd(e.target.value)}>
                    </input>
                    <span>
                    <Link to='/login'>
                    <button className='inputs-signup' onClick={(e)=> {
                        createUser(name, tel, passwd, e)}}> Submit</button>
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

export default SignupPage
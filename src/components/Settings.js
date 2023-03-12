import { useState } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import ModeButton from '@mui/icons-material/Brightness4';
import CurrUser from './CurrUser'
import { Outlet, Link } from "react-router-dom";


const Settings = () => {

const[darkMode, setDarkMode]= useState(true);




  return (
    <>
        <div >
            <div className="uk-card uk-card-default uk-card-body uk-animation-slide-bottom" id='settings-panel'>
            <h2 className="uk-text-center">Settings</h2>

            <CurrUser/>
            <ThemeContext.Consumer>
                {({changeTheme})=>(
                     <button className="uk-button uk-button-default" type="button" id='mode-button'  onClick={()=> {
                                setDarkMode(!darkMode);
                                changeTheme( darkMode? themes.dark: themes.light); }}>
                        <ModeButton className='toggle'/>
                    </button>
                )}
            </ThemeContext.Consumer>
            
            <Link to='/'>Signout<button className="uk-icon-button" id='button-signout' uk-icon="sign-out"></button></Link>

            </div>
        </div>
    </>
  )
}

export default Settings
import { useState } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import ModeButton from '@mui/icons-material/Brightness4';

const Settings = () => {

const[darkMode, setDarkMode]= useState(true);




  return (
    <>
        <div >
            <div className="uk-card uk-card-default uk-card-body uk-animation-slide-bottom" id='settings-panel'>
            <p className="uk-text-center">Settings</p>

            <ThemeContext.Consumer>
                {({changeTheme})=>(
                     <button className="uk-button uk-button-default" type="button" id='mode-button'  onClick={()=> {
                                setDarkMode(!darkMode);
                                changeTheme( darkMode? themes.dark: themes.light); }}>
                        <ModeButton className='toggle'/>
                    </button>
                )}
            </ThemeContext.Consumer>
            
            <a href='' className="uk-icon-button" id='button-signout' uk-icon="sign-out"></a>

            </div>
        </div>
    </>
  )
}

export default Settings
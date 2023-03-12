import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import './index.css';
import App from './pages/AppPage';
import './App.css';
import UIkit from 'uikit';
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons"
import ThemeContextProvider from './contexts/ThemeContext';
import SignupPage from './pages/SignupPage';
import SignupContextProvider from './contexts/AccountsContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'



UIkit.use(Icons);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SignupContextProvider>
      <ThemeContextProvider>     {/*context to have a global theme wrapped around our app*/}
        <React.StrictMode>
           <Routes>
            <Route path='/' element= {<HomePage/>} />
            <Route path='/app' element= {<App />} />
            <Route path='/signup' element= {<SignupPage />} />
            <Route path='/login' element= {<LoginPage />} />
            
          </Routes>
        </React.StrictMode>{' '}
      </ThemeContextProvider>  
    </SignupContextProvider>
  </BrowserRouter>
);


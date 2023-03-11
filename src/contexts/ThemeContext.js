import { createContext , useState, useEffect} from "react";

export const themes={
    light: 'day-mode',
    dark: 'night-mode',
}

export const ThemeContext= createContext({
    theme: themes.light,
    changeTheme: () => {},
})

export default function ThemeContextProvider (props){

    const [theme, setTheme]= useState(themes.light);


    function changeTheme(theme){
        setTheme(theme);
    }

    useEffect(()=>{
        switch(theme){
            case themes.light:
                document.body.classList.remove('night-mode');
                document.body.classList.add('day-mode');
                break;
            case themes.dark:
                document.body.classList.remove('day-mode');
                document.body.classList.add('night-mode');
                break;
            default:
                document.body.classList.add('day-mode');
                document.body.classList.remove('night-mode');
                break;
        }
    }, [theme]);


  return (
    <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
    {props.children}
    </ThemeContext.Provider>
  )
}
import React, {useState, createContext, useEffect} from 'react';

export const SignupContext= createContext(null)

const SignupContextProvider = props => {

    const [users, setUsers]= useState([
{
    "id": 0,
    "tel": 346565,
    "name": "mia",
    "passwd": 123456
},
{
    "id": 1,
    "tel": 222,
    "name": "albi",
    "passwd": 111
}
])

const checkUser=(tel, passwd, e)=>{
    const matchingUser = users.find(
        (user) => user.tel == tel && user.passwd == passwd
    );
    if (matchingUser)  return true;
    else {e.preventDefault()}
      
}

const createUser=(name, tel, passwd, e)=>{
    let id= users[users.length-1].id +1;
    let pattern1=  /^[A-Za-z]\w{7,14}$/;
    let pattern2= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(users.find(user=> user.tel ==tel)){
         alert("Such phone already registered!")
         e.preventDefault()
    } else if(tel==null || passwd== null){
        alert("Insert in all fields!");
        e.preventDefault()
    } else if(!tel.match(pattern1) || !passwd.match(pattern2)){
        alert("Phone number is not valid or password isnt strong enough!");
        e.preventDefault()
    } else {
        let newuser= {id: id, name: name, tel:tel, passwd: passwd}
        setUsers([...users, newuser])
    }
    
}
useEffect(()=>{console.log(users)}, [users])



  return (
   <SignupContext.Provider
        value={{
            checkUser,
            createUser
        }}
   >
    {props.children}
   </SignupContext.Provider>
    
  )
}


export default SignupContextProvider
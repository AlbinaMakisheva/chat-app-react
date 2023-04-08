import React, {useState, createContext, useEffect} from 'react';
import { Link } from "react-router-dom";


export const SignupContext= createContext(null)

const SignupContextProvider = props => {

    const [isLoading, setIsLoading] = useState(false);

   
    const [loggedUser, setLoggedUser]= useState()
    const [chats, setChats]=useState([]);


    const [users, setUsers]= useState(
        [
// {
//     "id": 0,
//     "tel": 346565,
//     "name": "mia",
//     "passwd": 123456
// },
// {
//     "id": 1,
//     "tel": 222,
//     "name": "albi",
//     "passwd": 111
// }
 ]
)

useEffect(()=> getUsers(),[]);

const getUsers=()=>{
  fetch('http://localhost:8888/chatapp-api/users/getUser.php')
    .then(res=> {
        if(!res.ok) throw new Error('Network response problem')
        return res.json()
    })
    .then(data=> {
        console.log(data);
        setUsers(data)})
    .catch(err=> console.log('Error:' + err))
}

// const getUsers = async () => {
//     try {
//       const res = await fetch('http://localhost:8888/chatapp-api/users/getUser.php');
//       if (!res.ok) throw new Error('Network response problem');
//       const data = await res.json();
//       console.log(data);
//       setUsers(data);
//       getLoggedAccountChats(); // Call getLoggedAccountChats after updating users state
//     } catch (err) {
//       console.log('Error:' + err);
//     }
//   }
  



// useEffect(()=>{ console.log(users)}, [users])
// useEffect(() => { console.log(loggedUser)}, [loggedUser]);
useEffect(() => { console.log(chats)}, [chats]);


  
   
const checkUser=(tel, passwd, e)=>{
    setIsLoading(true);

    fetch('http://localhost:8888/chatapp-api/users/checkUser.php',{
        method:'POST',
        body: JSON.stringify({
            tel: tel,
            passwd: passwd
        })
    })
    .then(res=> { 
        if (!res.ok) {
                throw new Error('Network response was not ok');
                }
                return res.json()
            })
    .then(data => {
        console.log(data.success);
        if (data.success == false) {
            e.preventDefault();
            return false;
        } else {
            let usr= data.user
            setLoggedUser(data.user); 
            setIsLoading(false);
            console.log('loggeduser'+ loggedUser);
            getLoggedAccountChats(usr);
            
            }
        })
    .catch(err=> {
        console.log(err); 
        setIsLoading(false);})
}


//useEffect(()=>getLoggedAccountChats(), [loggedUser]);

const getLoggedAccountChats=(usr)=>{
    setIsLoading(true);
    fetch('http://localhost:8888/chatapp-api/chats/getChat.php',
    {
        method: 'POST',
        body: JSON.stringify({
            id: usr,
    })})
    .then(res=> {
        if(!res.ok) throw new Error('Network response problem')
        return res.json()
    })
    .then(data=> {
        console.log('key:'+ data.key)
        setChats(data.chats);
        setIsLoading(false);
        console.log(chats)
    })
    .catch(err=> console.log('Error:' + err))
}


// const checkUser=(tel, passwd, e)=>{
//     const matchingUser = users.find(
//         (user) => user.tel == tel && user.passwd == passwd
//     );
//     if (matchingUser)  return true;
//     else {e.preventDefault()}
      
// }



const createUser=(name, tel, passwd, e)=>{
    fetch('http://localhost:8888/chatapp-api/users/createUser.php',{
        method: 'POST',
        body: JSON.stringify({
            name: name,
            tel: tel,
            passwd: passwd   
        })
    })
    .then(res=> {  
        if (!res.ok) {
            throw new Error('Network response was not ok');
            }
        return res.json()})
    .then(data=> { 
        console.log(data)
        if(data.success === false){
            e.preventDefault();
        } else {
            <Link to='/'></Link>; setUsers(data)}})
    .catch(err=> console.log(err))
}


// const createUser=(name, tel, passwd, e)=>{
//     let id= users[users.length-1].id +1;
//     let pattern1=  /^[A-Za-z]\w{7,14}$/;
//     let pattern2= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

//     if(users.find(user=> user.tel ==tel)){
//          alert("Such phone already registered!")
//          e.preventDefault()
//     } else if(tel==null || passwd== null){
//         alert("Insert in all fields!");
//         e.preventDefault()
//     } else if(!tel.match(pattern1) || !passwd.match(pattern2)){
//         alert("Phone number is not valid or password isnt strong enough!");
//         e.preventDefault()
//     } else {
//         let newuser= {id: id, name: name, tel:tel, passwd: passwd}
//         setUsers([...users, newuser])
//     }
    
// }





if (isLoading) {
    return (
        <div>Loading...</div>
    );
} else {
    return (
        <SignupContext.Provider
            value={{
                getUsers,
                checkUser,
                createUser,
                chats: chats
            }}
        >
            {props.children}
        </SignupContext.Provider>
    )
}
}


export default SignupContextProvider
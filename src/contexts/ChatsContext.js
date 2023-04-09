import React, {useState, createContext, useEffect} from 'react';
import { Link } from "react-router-dom";


export const ChatsContext= createContext(null)

const ChatsContextProvider = props => {

const [isLoading, setIsLoading]= useState(false);



// const getLoggedAccountChats=(usr)=>{
//     setIsLoading(true);
//     fetch('http://localhost:8888/chatapp-api/chats/getChat.php',
//     {
//         method: 'POST',
//         body: JSON.stringify({
//             id: usr,
//     })})
//     .then(res=> {
//         if(!res.ok) throw new Error('Network response problem')
//         return res.json()
//     })
//     .then(data=> {
//         console.log('key:'+ data.key)
//         setIsLoading(false);
//         console.log(chats)
//     })
//     .catch(err=> console.log('Error:' + err))
// }


const addFriend=(loggedUser, newName, newNum)=>{
    setIsLoading(true);

    fetch('http://localhost:8888/chatapp-api/chats/addFriend.php',{
        method: 'POST',
        body: JSON.stringify({
            loggedId: loggedUser,
            name: newName,
            num: newNum  
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
        } else {
            console.log(data);
            setIsLoading(false);
        }})
    .catch(err=> console.log(err))
}


// const addFriend=(newName, newNum)=>{
//     setShowBody(true);
//     setShowAdd(false);
//     let id= people[people.length-1].id +1;
//     console.log(id, newName, newNum)
//     let newFriend= {id, name: newName, num: newNum}
//     people.push(newFriend)
//   }


const sendMess=(loggedUser, newMess, name, emoji)=>{
    fetch('http://localhost:8888/chatapp-api/chats/sendMess.php',{
        method: 'POST',
        body: JSON.stringify({
            loggedId: loggedUser,
            name: name,
            mess: newMess,
            emoji: emoji  
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
        } else {
            console.log(data);
            setIsLoading(false);
        }})
    .catch(err=> console.log(err))
}

// const sendMess=(newMess, name, emoji)=>{
//     const update= people.map(person=>{
//     if (person.name === name){
//         let newmessage= {...person.messages, "1.3": newMess};
//         return {...person,  messages: newmessage };
//       } else return person;
//     });
//     setPeople(update)
//   }
  


if (isLoading) {
    return (
        <div>Loading...</div>
    );
} else {
    return (
        <ChatsContext.Provider
            value={{
                addFriend: addFriend,
                sendMess,
            }}
        >
            {props.children}
        </ChatsContext.Provider>
    )
}
}


export default ChatsContextProvider;
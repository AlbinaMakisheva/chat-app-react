
import Body from '../components/List';
import Footer from '../components/Footer';
import Settings from '../components/Settings';
import AddUser from '../components/AddUser';
import { useState, useEffect, useContext} from 'react';
import { ChatsContext } from '../contexts/ChatsContext';
import { SignupContext} from '../contexts/AccountsContext';


function App() {

  const [people, setPeople]= useState(
[{
    "id": 0,
    "name": "John",
    "num": 12345,
    "messages":{
       "1.1": "hi",
       "1.2": "how r u",
       "2.1": "hi"
      }
    
},
{
    "id": 1,
    "name": "Alice",
    "num": 6765,
    "messages":{
      "1.1": "hi",
      "1.2": "how r u",
      "2.1": "hi",
      "2.2": "not bad"
     }
},
{
    "id": 2,
    "name": "Hannah",
    "num": 45678,
    "messages":{
      "1.1": "hi",
      "1.2": "what was hometask?",
      "2.1": "idk"
     }
}]);

const [showSet, setShowSet]= useState(false);
const [showAdd, setShowAdd]= useState(false);
const [showBody, setShowBody]= useState(true);

const [isLoading, setIsLoading] = useState(false);



const changeSet=(val)=>{
  setShowSet(val)
}
const changeAdd=(val)=>{
  setShowAdd(val)
}
const changeBody=(val)=>{
  setShowBody(val)
}

// useEffect(()=> getUsers,[]);

// const getUsers=()=>{
//   fetch('http://localhost:8888/chatapp-api/users/getUser.php')
//     .then(res=> { 
//           if(!res.ok) throw new Error('Network response problem')
//           return res.json()
//         })
//     .then(data=> setPeople(data))
//     .catch(err=> console.log('Error:' + err))
// }

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
//   const update= people.map(person=>{
//   if (person.name === name){
//       let newmessage= {...person.messages, "1.3": newMess};
//       return {...person,  messages: newmessage };
//     } else return person;
//   });
//   setPeople(update)
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
//   setShowBody(true);
//   setShowAdd(false);
//   let id= people[people.length-1].id +1;
//   console.log(id, newName, newNum)
//   let newFriend= {id, name: newName, num: newNum}
//   people.push(newFriend)
// }


  return (
    
    <div className="App">
      <div className='header'>
        <h1 id='chatapp'> Chat App</h1>
      </div>
      <div className='body' id='mainpart'>
        {
          showBody? <Body people={people} sendMess={sendMess} /> : null
        } 
        {
          showAdd ? <AddUser addFriend={addFriend} /> : null
        }
        {
          showSet ? <Settings/> : null
        }  
      </div>
      
      
      <div className='footer'>
          <Footer changeSet={changeSet} changeAdd={changeAdd} changeBody={changeBody} showBody={showBody} showAdd={showAdd} showSet={showSet}/>
      </div>
    </div>
  );
}

export default App;

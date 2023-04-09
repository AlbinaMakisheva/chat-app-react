import { useState, useContext} from "react"
import { ChatsContext } from "../contexts/ChatsContext";
import { SignupContext } from "../contexts/AccountsContext";

const AddUser = ({addFriend}) => {

const [newName, setNewName]= useState('');
const [newNum, setNewNum]= useState('');

const usercontext= useContext(SignupContext);
const {loggedUser}= usercontext;

// const addFriend = useContext(ChatsContext).addFriend;

  return (
    <>
   {/*<ChatsContext.Consumer>
    {({addFriend})=>
  (*/}
    <div>
        <div className="uk-card uk-card-default uk-card-body uk-animation-slide-bottom" id='adduser-panel'>
        <p className="uk-text-center">Add User</p>
        <form className='flex-vert'>
            <input className='newUserData' type='text' placeholder ='Name' value ={newName} required onChange={(e)=>
                setNewName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}></input>
            <input className='newUserData' type='tel' placeholder ='Phone' value ={newNum} required onChange={(e)=>
                setNewNum(e.target.value)}></input>
            <button className='button' type="button" onClick={(e)=> 
                {
                    e.preventDefault()
                    if(newName !== null && newNum !== null) {
                        addFriend(loggedUser, newName, newNum)
                    } else { 
                        alert("Something went wrong! Check inputs");
                    }
                }
            }
                >Save</button>
        </form>


        </div>
    </div>
    {/*)}
   </ChatsContext.Consumer>*/}
    
</>
  )
}

export default AddUser
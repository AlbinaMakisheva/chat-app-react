import { useState } from "react"

const AddUser = ({addFriend}) => {

const[newName, setNewName]= useState();
const[newNum, setNewNum]= useState();


  return (
    <>
    <div>
        <div className="uk-card uk-card-default uk-card-body uk-animation-slide-bottom" id='adduser-panel'>
        <p className="uk-text-center">Add User</p>
        <form className='flex-vert'>
            <input className='newUserData' type='text' placeholder ='Name' value ={newName} required onChange={(e)=>
                setNewName(e.target.value)}></input>
            <input className='newUserData' type='tel' placeholder ='Phone' value ={newNum} required onChange={(e)=>
                setNewNum(e.target.value)}></input>
            <button className='button' type="button" onClick={(e)=> 
                {e.preventDefault()
                if(newName, newNum !=null) addFriend(newName, newNum);
                else alert("Somithing went wrong! Check inputs");
                }}>Save</button>
        </form>


        </div>
    </div>
</>
  )
}

export default AddUser
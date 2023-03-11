import { useState } from "react";


const Chat = ({name, people, sendMess, handleOpen}) => {
   const [newMess, setnewMess]= useState();

   const changeOpen=()=>{
    handleOpen(false);
   }

  return (
    <div> 
        <div className='flex-hor'>
            <h3>Chat with {name}</h3>
            <a className="uk-margin-small" id='button-close' uk-icon="close" onClick={changeOpen}></a>
        </div>
        <div className="uk-section  uk-section-default">
        {people.map(person => {
            if(person.name === name && person.messages){
                 return Object.keys(person.messages).map((mess, index)=>{
                    if(mess.startsWith('1')){
                        return <div id='mymess' key={index}>{person.messages[mess]}</div>
                    } else{
                        return <div id='friendsmess' key={index}>{person.messages[mess]}</div>
                    }
                })
                
            }
        })}

         </div>
        <div className='flex-hor' id="chat-input">
        <input className="uk-input"  type="text" value={newMess} placeholder="Type.." onChange={(e)=>{
            setnewMess(e.target.value)
        }}></input>
        <a href="" class="uk-icon-button" uk-icon="arrow-up" onClick={(e)=>{
            e.preventDefault();
            sendMess(newMess, name);
            setnewMess('')
        }}></a>
        </div>
       
    </div>
    
  )
}

export default Chat
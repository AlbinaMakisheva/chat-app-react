import { useState } from "react";
import Chat from './Chat';
import Footer from './Footer';


const Body = ({people, sendMess}) => {

const [openchat, setOpenchat]= useState(false);
const [personName, setPersonName]= useState();

const handleOpen=(val)=>{
    setOpenchat(val)
}


  return (
    <div className="uk-card uk-card-body uk-animation-slide-bottom" id='chatbody'>
        <hr className="uk-divider-small"></hr>
        
    <div className="uk-flex uk-flex-center" id='chats'>
    <div className="uk-card uk-card-default uk-card-body" id='chatnames'>
    <table className="uk-table uk-table-responsive uk-table-divider">
    <thead>
        <tr>
            <td><h3>Chats</h3></td>
        </tr>
    </thead>
    <tbody>
        {people.map((person, index)=>(
            
                <tr key={index}>
                    <td> 
                        <h5 className='namelink' onClick={()=>{
                        setOpenchat(true);
                        setPersonName(person.name)}
                        }>{person.name}</h5> 
                    </td>
                </tr>
            
        ))} 
    </tbody>
    </table>

    </div>
        <div className="uk-card uk-card-default uk-card-body uk-margin-left" id='chatting-area'>
            {openchat? <Chat name={personName} people={people} sendMess={sendMess} handleOpen={handleOpen}/>   
            : <p id='choosechat'>Choose a chat</p>}

        </div>
    </div>
    </div>
  )
}

export default Body;

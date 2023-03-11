

const Footer = ({changeSet, changeAdd, changeBody, showBody, showAdd, showSet}) => {

    const handleSet=()=>{ 
        if(showAdd) changeAdd(false);
        if(showBody) changeBody(false);
        changeSet(true);
    }

    const handleAdd=()=>{
        if(showSet) changeSet(false);
        if(showBody) changeBody(false);
        changeAdd(true)
    }
    
    const handleBody=()=>{
        if(showSet) changeSet(false);
        if(showAdd) changeAdd(false);
        changeBody(true)
    }

  return (
    <>
    
    <div className='footer-panel'> 
    <hr/>
        <span className='footer-icons'><a className="uk-margin-small" uk-icon="user" onClick={handleAdd}></a></span>
        <span className='footer-icons'><a className ="uk-margin-small" uk-icon="comment" onClick={handleBody}></a></span>
        <span className='footer-icons'><a className="uk-margin-small" uk-icon="cog" onClick={handleSet}></a></span>
    </div>
    
    </>
  )
}

export default Footer

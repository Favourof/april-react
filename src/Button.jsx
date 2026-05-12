function Button(props) {
    console.log(props);
  
    
    return (
        <div>
            <button className="but" onClick={props.alertme} style={{background:`${props.color}`}}>{props.text}</button>
        </div>
    )
}

export default Button
import React, { useState } from 'react'
// import "../Ejob/Todo.css";
const Todo = () => {
    const[input,setInput]=useState('')      // here when the user is accesing new value comes in this state
    const [items, setItems]=useState([])    

    const ChangeValue=(e)=>{
        setInput(e.target.value)
    }

    const Function1=()=>{             // by spread operator the input from the user is assigned in the old value
                                        //in an empty array so by map we can display it fruitfully
        setItems([...items, input])
            
    }
    const DeleteObj=(p)=>{
        setItems(items.filter((e,i)=>p!==i))
    }
  return (
    <>
     <label style={{color:"#d1d1d1",fontWeight:"Bold", fontSize:"80px"}}><center>todo's</center></label>
    <input type="text" placeholder='Add Todo' style={{paddingTop:"10px",paddingRight:"300px",borderRadius:"30px", paddingBottom:"10px"}} onChange={ChangeValue}></input>
    <button onClick={Function1} style={{background:"white", border:"white",position:"relative",marginLeft:"-73px",marginTop:"9px",fontSize:"16px"}}><b>Submit</b></button>
    <ul  style={{
        listStyleType:"none",
        textAlign:"center",
      }}>
       
        {items.map((itemval,e)=>{     //using map for displaying array
            return (
                                 
                <li key={e} style={{display:'flex',justifyContent:"space-evenly",width:"52%", marginLeft:"22%",}}>{itemval}
                <button onClick={() => DeleteObj(e)} style={{borderRadius:"50%",padding: "10px",textAlign: "center",textDecoration: "none", display: "inline-block", fontSize: "13px", margin: "4px 2px", border:"#d1d1d1"}}>Delete</button>
                </li>     
               
            )
        })}
    </ul>
    </>     //if you want to show the value in different component then pass props
                           //< Todo text={itemval}/-> next component{props.text}
  )
}

export default Todo
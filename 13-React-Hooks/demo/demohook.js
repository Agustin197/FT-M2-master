import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export function component (){
    const [input,setInput] = useState({
        username:"",
        password:""
    })
useEffect(() =>{
    console.log("se monto el componente")
}, [])

const dispatch = useDispatch()
    return(
        <>
        <h1>
            soy un componente
            <button onClick={() => dispatch({type: "increment",payload: 1 })}></button>
        </h1>
        </>
    )
}

export function Detail ({detalle}) { 
    return (
        <>
        <h1> soy deatil </h1>
        <h2> {detalle.titulo}</h2>
        <h2> {detalle.description}</h2>
        </>
    )
}

export function Container (){
   //traer estado de redux 
    const detail = useSelector( state => state.detail) //useSelector remplaza conect 

return (
    <>
    <Detail detalle={detail}/>
    </>
)
}
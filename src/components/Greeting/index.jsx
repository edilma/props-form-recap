import { useState } from "react"

export default function Greeting (){
    const [name, setName] = useState(" , Stranger");

    return (
        <>
      
        <h1>Hello user{name || ".  Please log in"}</h1>
        <button onClick={ ()=>setName()}> Change </button>
      
        </>
    )
}
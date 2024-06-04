"use client"
import { useEffect, useState } from "react"

const ClickButton = (props) => {

    const [num, numfun]= useState(0)

    const handleClick = ()=>{
        console.log(num)
        if (num<10){
            numfun(num + props.addBy)
        }
       
    }

    useEffect(()=>{
        console.log("first useEffect function")
    },[])

    useEffect(()=>{
        if (num >= 10 ){
            alert('value is greater than 10')
        }
        
    },[num])

  return (
    
    <>
        <button onClick={handleClick} className="border border-emerald-50 px-1 mb-2"> + {props.addBy}</button>
        <div>{num}</div>
    </> 
  )
}

export default ClickButton

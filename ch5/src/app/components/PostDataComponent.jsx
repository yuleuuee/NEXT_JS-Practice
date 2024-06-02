'use client'

import { useState } from "react"

const PostDataComponent = () => {
  const [formData,setFormData]= useState({
    title : '',
    body : '',
  })

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value })
  }

  const handleFormSubmit = async (e) =>{
    e.preventDefault(); // preventing the reload of the browser when clicking submit 

    const res = await fetch("http://localhost:3000/api/posts",{
      method : "POST",
      body : JSON.stringify(formData) // sending the form data in backend(api) by making it string 
    })
    console.log("Response in front end ::------------- ",res);

  }
  return (
    <form action="" onSubmit={handleFormSubmit}>
      Title : <input type="text" name="title" value={formData.title} onChange={handleChange} className="text-black p-1 "></input>
      <br /><br />
      Body : <input type="text" name="body" value={formData.body} onChange={handleChange} className="text-black p-1 "></input>
      <br /><br />
      <button type="submit" className="border border-cyan-300 p-1">Submit</button>
    </form>
    
  )

  
}

export default PostDataComponent

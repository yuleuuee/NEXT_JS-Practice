import React from 'react'

const getData = async () =>{
    const res = await fetch('http://localhost:3000/api/posts',
        {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json',
            }
        }
    )
    const posts = await res.json()
    return posts 
}  


const GetDataComponent = async () => {

    const allPosts = await getData() // await : as it is an async 
    console.log(" All Posts  --------------------------:", allPosts);
    return (
        <>
            {
                allPosts.result.map((post,i)=>(
                <div key={i} className="border border-black-50 m-4 p-2">
                    <h2>Title : {post.title}</h2>
                    <h2>Body : {post.body}</h2>
                </div>
            
                
                ))

            } 
        </>
    )
}

export default GetDataComponent
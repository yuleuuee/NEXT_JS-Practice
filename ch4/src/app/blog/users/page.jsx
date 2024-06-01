import React from 'react'

const getData = async () =>{
    const res = await fetch('http://localhost:3000/api/blog/users',
        {
            headers : {
                'Content-Type' : 'application/json',
            }
        }
    )
    const users = await res.json()
    return users 
}  


const BlogUsers = async () => {

    const allUsers = await getData() // await : as it is an async 
    console.log(" All users :", allUsers);
    return (
        <>
            <h1 className="font-bold"> FrontEnd sends request to backend&lt;api&gt;,then backend fetch the data from actual websites and give to frontend :----------------- </h1>
            <h1>----------:: List of Users Information ::---------- </h1>
            {
                allUsers.data.map((user,i)=>(
                <div key={i} className="border border-black-50 m-4 p-2">
                    <h2>Name : {user.name}</h2>
                    <h2>Email : {user.email}</h2>
                    <h2>Contact no. : {user.phone}</h2>

                </div>
                ))
            }
        </>
    )
}

export default BlogUsers

async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users") // By default is GET method

    return res.json()
}

const LearnDataFetch = async () => {
  const data = await getData() // await : as it is an async 
  console.log("DATA :",data);
  return (
    <>
      <h1 className="font-bold">List of Users info. which are fetched form 'https://jsonplaceholder.typicode.com/users' :: </h1>

      {
        data.map((user,i)=>(
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

export default LearnDataFetch

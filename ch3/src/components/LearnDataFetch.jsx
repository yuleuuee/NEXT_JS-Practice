async function getData(){
    const res =await fetch("https://jsonplaceholder.typicode.com/posts") // By default is GET method
    // if(!res.ok){
    //     <p>DATA not found</p>
    // }
    return res.json()
}

const LearnDataFetch = async () => {
    const data = await getData() // await : as it is an async 
    console.log("DATA :",data);
  return (
    <div>
      Learn Data Fetch
    </div>
  )
}

export default LearnDataFetch

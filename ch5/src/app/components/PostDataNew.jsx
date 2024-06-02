import connectDB from "@/lib/connectDB"
import PostModel from "@/models/post"

const create = async(formData) =>{
    'use server'
    await connectDB()
    const allPosts = await PostModel.create({
        title : formData.get('title'),
        body : formData.get('body')
    }) 
}

const PostDataNew = () => {
  return (
    <form action={create} >
      Title : <input type="text" name="title" className="text-black p-1 "></input>
      <br /><br />
      Body : <input type="text" name="body" className="text-black p-1 "></input>
      <br /><br />
      <button type="submit" className="border border-cyan-300 p-1">Submit</button>
    </form>
    
  )

  
}

export default PostDataNew

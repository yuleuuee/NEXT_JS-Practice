import connectDB from "@/lib/connectDB";
import PostModel from "@/models/post"

export default async function GetDataNew() {

    await  connectDB()
    // directly getting data from the post model
    const allPosts = await PostModel.find() 

    console.log(" All Posts  --------------------------:", allPosts);
    return (
        <>
            {
                allPosts.map((post,i)=>(
                <div key={i} className="border border-black-50 m-4 p-2">
                    <h2>Title : {post.title}</h2>
                    <h2>Body : {post.body}</h2>
                </div>
            
                
                ))

            } 
        </>
    )
}
import { NextResponse } from "next/server"

// *********************: using arrow function :*********************

// Using the dynamic variable form the URL : Long way ---->

// export const GET = async (req,context) =>{
//     // console.log('req :', req)
//     console.log("Context : -------> ", context)
//     console.log("Context.params : -------> ", context.params)
//     console.log("Context.params.id : -------> ", context.params.id) // as we have written 'id' after the 'product' page
//     return NextResponse.json({"msg" : "GET Success"},{status:200}) // for GET method : status is 200
// }


// Another way to use the dynamic variable form the URL : Short way ---->

export const GET = async (req,{params}) =>{
    console.log("params : -------> ", params)
    console.log("params.id : -------> ", params.id) // as we have written 'id' after the 'product' page
    return NextResponse.json({"msg" : "GET Success"},{status:200}) // for GET method : status is 200
}
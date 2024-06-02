import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import PostModle from "@/models/post"

export async function GET(req) {
    try{
        await connectDB()
        const result = await PostModle.find()
        // console.log("result -------------------------- ",result)
        return NextResponse.json({result : result },{ status : 200})
    } catch(error){
        return NextResponse.json({"msg":"Something went wrong..."},{ status : 400})
    }
  }

  export async function POST(req) {

    const body = await req.json()
    try{
        await connectDB()
        const result = await PostModle.create(body)
        // console.log("result -------------------------- ",result)
        return NextResponse.json({result : result },{ status : 201})
    } catch(error){
        return NextResponse.json({"msg":"Something went wrong..."},{ status : 400})
    }
  }
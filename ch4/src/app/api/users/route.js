import { NextResponse } from "next/server";

export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello, world!' }), { status: 200 });
  }

export async function POST(request) {

  // getting informaition from FRONT_END : ---->
  const res = await request.json()
  // console.log("RequestJSON : ",res)

  const formData = await request.formData()

  // console.log("form data : ", formData)

  // console.log("Name : ", formData.get("name"))
  // console.log("Email data : ", formData.get("email"))

  return NextResponse.json({"msg" : "Post Success"},{ status:201})
}
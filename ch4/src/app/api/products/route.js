import { NextResponse } from "next/server";

export async function GET(req){
    // console.log(req);

    // Headers :----------------------
    // const requestHeaders = new Headers(req.headers)
    // console.log(requestHeaders)

    // URL query params :----------------------
    // const {searchParams} = new URL(req.url)
    const searchParams = req.nextUrl.searchParams

    // console.log(searchParams)
    // console.log("Search Query : ",searchParams.get("search"))
    

    // Cookies :----------------------
    const cook1 = req.cookies
    console.log("cookie1 : ", cook1)

    // const cook2 = cookies()
    // console.log("cookie2 : ", cook2)

    return NextResponse.json({"msg":"Hello from NEXT api"})
    
}

export async function POST(req){
    return NextResponse.json({"msg":"POST request was Succes"})
}
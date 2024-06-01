import { NextResponse } from "next/server";

export async function GET(req){

    // Fetching the data from the others website (jsonplaceholder.typicode.com/users) :-------->
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        {
            headers : {
                'Content-Type' : 'application/json',
            }
        }
    )

    const users = await res.json();
    // console.log("USERS INFO : ", users)
    return NextResponse.json({'data': users}) // returning some data to the frontend
}
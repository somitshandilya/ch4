import { NextResponse } from "next/server";

export async function GET(req){
    return NextResponse.json({"mesg": "Hello NextJS"})
}
export async function POST(req){
    console.log(req)
    // const res = await req.json();
    // console.log ("Resjson:", res)
    return NextResponse.json({"mesg": "Post Success"})
}
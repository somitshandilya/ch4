import { NextResponse } from "next/server";

// export async function GET(req){
//     return NextResponse.json({"mesg": "Hello ID"})
//     console.log()
// }
// export async function POST(req){
//     console.log(req)
//     // const res = await req.json();
//     // console.log ("Resjson:", res)
//     return NextResponse.json({"mesg": "Post Success"})
// }
export const GET = async (req, params) =>{
    console.log("Context1", params)
    console.log("Context2", params.params.id);
    return NextResponse.json({"mesg": params.params.id})
}
export const POST = async (req, params) =>{
    console.log("Context1", params)
    console.log("Context2", params.params.id);
    return NextResponse.json({"mesg": params.params.id})
}
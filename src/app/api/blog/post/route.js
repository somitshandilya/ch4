import { NextResponse } from "next/server";

export async function GET(req){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const posts = await res.json();
        return NextResponse.json(posts); // Return the fetched posts
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.error('Internal Server Error');
    }
}

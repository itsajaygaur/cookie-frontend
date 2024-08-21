// import { cookies } from "next/headers";
"use client"
import { useEffect, useState } from "react";



export default function Dashboard() {

const [text, setText] = useState("wait...");

async function getData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
            credentials: "include",
        });
        const data = await response.json();
        console.log('received response',data)
        if(data.success){
            setText("data success")
            return
        }
        setText("error")
    } catch (error) {
        console.log(error)
        setText("error")
    }
}

useEffect(() => {
    getData()
}, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
        <p>{text || "unexpected error"}</p> 
    </main>
  );
}
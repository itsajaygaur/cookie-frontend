"use client"
import { useRouter } from "next/navigation";
import { setToken } from "./actions";
import Cookies from "js-cookie";

export default function Home() {
  const router = useRouter();

  async function login() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setToken(data.data);
        // Cookies.set('token', data.data, {secure: true})
      }
      
    } catch (error) {
      alert('something went wrong')
    }
  }

  return (
    <main className="p-10" >
      <buttton className="bg-orange-500 px-4 py-2 cursor-pointer" onClick={login} >login</buttton>
    </main>
  );
}

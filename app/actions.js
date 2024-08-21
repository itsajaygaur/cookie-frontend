"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function setToken(token) {

    cookies().set('token', token, {
        httpOnly: true,
        secure: true,
    })
    redirect('/dashboard')
}
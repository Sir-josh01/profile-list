"use client"

import React from "react";
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {

  const router  = useRouter();

  useEffect(() => {
    setTimeout(() => {
    console.log("hello i ran")
      router.push('/')
    }, 3000); 
  }, [router])

  return (
    <>
    <div className="not-found">
      <h1>Opppps!!</h1> 
       <h2>that page cannot be found, this is a 404 Error</h2>
      <p>Go back to the <Link href="/" className="link">home-page</Link>
      </p>
    </div>
    
    <div className="not-found text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">Oppps!!</h1> 
      <h2 className="text-xl my-4">That page cannot be found. This is a 404 Error.</h2>
      <p>Redirecting to the homepage in 3 seconds...</p>
      <p>Or go back now: <Link href="/" className="link text-blue-500 hover:underline">Home Page</Link></p>
    </div>
    </>
  );
}

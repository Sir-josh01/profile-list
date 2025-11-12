
import React from "react";
import Link from 'next/link'

export default function notFound() {
  return (
    <div className="not-found">
      <h1>Opppps!!</h1> 
       <h2>that page cannot be found, this is a 404 Error</h2>
      <p>Go back to the <Link href="/" className="link">home-page</Link>
      </p>
    </div>
  );
}

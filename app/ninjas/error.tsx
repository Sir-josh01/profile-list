"use client";

import Link from "next/link";

export default function notFound() {
  return (
    <div className="not-found">
      <h1>Opppps!! this is inside the ninja pages</h1>
      <h2>that page cannot be found, this is a 404 Error</h2>
      <p>
        Go back to <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}

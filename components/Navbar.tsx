import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/globe.svg" alt="logo" width={40} height={40} />
        </Link>
      </div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja-Listing</Link>
    </nav>
    </>
  );
}

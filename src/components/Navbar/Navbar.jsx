import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 border sticky top-0 z-500">
      <div>
        <h1>TeaNest</h1>
      </div>
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/teas">Teas</Link>
        <Link href="/addTeas">Add Teas</Link>
        <Link href="/manageTeas">Manage Teas</Link>
        <Link href="/about">About us</Link>
      </div>
      <div className="flex gap-4">
        <Link href='/login'>Login</Link>
        <Link href='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;

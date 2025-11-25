import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 border">
      <div>
        <h1>TeaNest</h1>
      </div>
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/">All products</Link>
        <Link href="/">Add Products</Link>
        <Link href="/">Manage Product</Link>
        <Link href="/">About us</Link>
      </div>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;

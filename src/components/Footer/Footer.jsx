import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border">
      <div>
        <h1 className="text-center">TeaNest</h1>
        <p className="text-center">Description</p>
        <div className="flex justify-center gap-5">
          <a href="">facebook</a>
          <a href="">insts</a>
          <a href="">twitter</a>
          <a href="">email</a>
          <a href="">youtube</a>
        </div>
        <div className="flex justify-center gap-5">
          <Link href="/">home</Link>
          <Link href="/">about us</Link>
          <Link href="/">contect us</Link>
          <Link href="/">our team</Link>
        </div>
      </div>
      <div className="border">
        <p className="text-center">&copy; TeaNest. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[2rem] font-dancing font-bold cursor-pointer mt-20">
      <Image src="/ukmlogo.png" alt="IBB Ulaşım Logo" className="footer-logo " width={300} height={300} /> 
      </span>
    </Link>
  );
};

export default Logo;

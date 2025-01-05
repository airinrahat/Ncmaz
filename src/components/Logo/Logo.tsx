import React from "react";
import LogoSvg from "./LogoSvg";
import Link from "next/link";

export interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link
      href="/"
      className="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
    >
      <LogoSvg />
    </Link>
  );
};

export default Logo;

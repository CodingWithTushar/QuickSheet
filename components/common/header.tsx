import Image from "next/image";
import React from "react";
import logo from "@/app/favicon.png";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <>
      <div>
        <nav className="container flex items-center justify-between px-3 py-3 text-gray-900 lg:px-7 lg:py-7">
          <div>
            <NavLink href="/">
              <div className="flex shrink-0 items-center gap-1 lg:gap-3">
                <Image
                  src={logo}
                  alt="logo"
                  className="h-7 w-7 rounded-full transition-all duration-200 hover:scale-110 lg:h-9 lg:w-9"
                />
                <h2 className="trasition-colors text-xl font-bold text-gray-600 duration-200 hover:text-blue-500">
                  Quick Sheet
                </h2>
              </div>
            </NavLink>
          </div>
          <div className="flex gap-3 lg:items-center lg:justify-center lg:gap-11">
            <SignedIn>
              <NavLink href={"/dashboard"}>Your Summaries</NavLink>
            </SignedIn>
          </div>
          <div className="flex items-center gap-3 lg:justify-end lg:gap-4">
            <SignedIn>
              <NavLink href={"/upload"}>Upload a PDF</NavLink>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </SignedIn>

            <SignedOut>
              <NavLink href={"/sign-in"}>Sign In</NavLink>
            </SignedOut>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

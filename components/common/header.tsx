import Image from "next/image";
import React from "react";
import logo from "@/app/favicon.png";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

 const Header = () => {
  const isLoggedIn = false;

  return (
    <>
      <div>
        <nav className="container flex items-center justify-between py-3 lg:py-7 px-3 lg:px-7 text-gray-900">
          <div>
            <NavLink href="/">
              <div className="flex items-center gap-1 lg:gap-3 shrink-0">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-7 h-7 lg:w-9 lg:h-9 rounded-full hover:scale-110 transition-all duration-200"
                />
                <h2 className="trasition-colors font-bold text-xl duration-200 text-gray-600 hover:text-blue-500">Quick Sheet</h2>
              </div>
            </NavLink>

          </div>
          <div className="flex lg:items-center lg:justify-center gap-3 lg:gap-11">
            <NavLink href={"/#pricing"} >
              Pricing
            </NavLink>
            {isLoggedIn ? (
              <NavLink href={"/dashboard"}>
                Your Summaries
              </NavLink>
            ) : null}
          </div>
          <div className="flex lg:justify-end gap-3 lg:gap-4">
            {isLoggedIn ? (
             <>
             <NavLink href={"/upload"} >
                Upload a PDF
              </NavLink>
              <div className="text-1xl font-semibold">Pro</div>
              <Button>Sign Out</Button>
             </> 
            ) : (
              <NavLink href={"/sign-in"} >
                Sign In
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

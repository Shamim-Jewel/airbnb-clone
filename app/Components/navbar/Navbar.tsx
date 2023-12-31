import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Searchbar />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import React, { useState } from "react";
import { useWindowSize } from "../../hooks";
import LogoImage from "../../public/logo.png";
import { WindowSize } from "../../types";
import {
  CloseButtonContainer,
  CloseIcon,
  LogoContainer,
  MenuIcon,
  MenuLinkContainer,
  Nav,
  NavLinkContainer,
  OverlayMenu,
} from "./NavElements";

import { motion } from "framer-motion";

import NavLink from "./NavLink";
import { useSession } from "next-auth/react";
import { BsFillPersonFill } from "react-icons/bs";
import login from "../../pages/login";
import Link from "next/link";
import UserProfile from "../Profile";

const Navbar = () => {
  const size: WindowSize = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0 }}
    >
      <Nav>
        <LogoContainer>
          <NavLink route="/">
            <Image src={LogoImage} alt="logo" width={50} height={50} />
          </NavLink>
          <Link href="/" className="cursor-pointer text-lg font-bold"><span className="text-green-700">Greenland</span> Estate</Link>
        </LogoContainer>

        <NavLinkContainer>
          {size.width > 768 ? (
            <>
              <NavLink route="/login">Login</NavLink>
              {/* <NavLink route="/about">About</NavLink> */}
              {/* <NavLink route="/contact">Contact</NavLink> */}
                
              {session ? (
                <NavLink route="/dashboard">
                  <BsFillPersonFill size={20} />
                </NavLink>
              ) : (
                <NavLink route="/signup">SignUp</NavLink>
                )}
            </>
          ) : (
            <MenuIcon size={30} onClick={openMenu} />
          )}
        </NavLinkContainer>

        {showMenu && (
          <OverlayMenu>
            <CloseButtonContainer>
              <CloseIcon size={40} color={"white"} onClick={closeMenu} />
            </CloseButtonContainer>
            <MenuLinkContainer>
              <NavLink route="/" large color="white" onClick={closeMenu}>
                Home
              </NavLink>
              <UserProfile />
              <NavLink
                route="/about"
                large
                color="white"
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink
                route="/contact"
                large
                color="white"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
              <NavLink route="/login" large color="white" onClick={closeMenu}>
                Login
              </NavLink>
            </MenuLinkContainer>
          </OverlayMenu>
        )}
      </Nav>
    </motion.div>
  );
};

export default Navbar;

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import logo from "../../images/logo-new.png";
import { NavLink as RouterLink } from "react-router-dom";
import Header, {
  NavLink,
  NavLinks,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl!  ml-0!`};

  img {
    ${tw`w-48 mr-3`}
  }
`;
const defaultLogoLink = (
  <LogoLink href="/">
    <img src={logo} alt="logo" />
  </LogoLink>
);

const StyledHeader = styled(Header)`
  ${tw` pt-8 max-w-none w-full bg-black pb-5  z-20 `}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

// Random Decorator Blobs (shapes that you see in background)

const navLinks = [
  <NavLinks key={1}>
    <RouterLink to="home">
      <NavLink>Home</NavLink>
    </RouterLink>
    <RouterLink to="about-us">
      <NavLink>About</NavLink>
    </RouterLink>
    <RouterLink to="blog">
      <NavLink>Blog</NavLink>
    </RouterLink>
    <RouterLink to="team">
      <NavLink>Team</NavLink>
    </RouterLink>
    <RouterLink to="career">
      <NavLink>Careers</NavLink>
    </RouterLink>
    <RouterLink to="service">
      <NavLink>Services</NavLink>
    </RouterLink>
    <RouterLink to="contact-us">
      <NavLink>Contact us</NavLink>
    </RouterLink>
  </NavLinks>,
];
export function NavBar() {
  return (
    <StyledHeader
      style={{ top: 0, position: "fixed" }}
      links={navLinks}
      roundedHeaderButton={true}
      logoLink={defaultLogoLink}
    />
  );
}

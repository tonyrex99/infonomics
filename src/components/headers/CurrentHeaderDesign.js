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

const navLinkContent = [
  { to: "home", name: "Home" },
  { to: "about-us", name: "About" },
  { to: "blog", name: "Blog" },
  { to: "team", name: "Team" },
  { to: "career", name: "Careers" },
  { to: "service", name: "Services" },
  { to: "contact-us", name: "Contact us" },
];

export function NavBar() {
  const [activeTab, setactiveTab] = React.useState("");
  const navLinks = navLinkContent.map((option, index) => (
    <RouterLink
      to={option.to}
      className={({ isActive, isPending }) => {
        if (isActive) {
          setactiveTab(option.name);
          document.title = `Infonomics | ${option.name}`;
          return isActive ? "activeNav" : "";
        }
      }}
    >
      <NavLink
        css={[tw`text-black`, activeTab === option.name && tw`underline`]}
      >
        {option.name}
      </NavLink>
    </RouterLink>
  ));
  return (
    <StyledHeader
      style={{ top: 0, position: "fixed" }}
      links={<NavLinks key={"navBar"}> {navLinks}</NavLinks>}
      roundedHeaderButton={true}
      logoLink={defaultLogoLink}
    />
  );
}

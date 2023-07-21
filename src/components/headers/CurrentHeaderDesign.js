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
  const [activeTab, setactiveTab] = React.useState("Home");
  const [isScrolled, setIsScrolled] = React.useState(true);
  const StyledHeader = styled(Header)`
    ${tw` pt-8 max-w-none w-full bg-white pb-5  z-20 fixed top-0 `}
    ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
      ${tw`text-black hover:border-gray-500 hover:text-black`}
    }
    ${NavToggle}.closed {
      ${tw`text-black hover:text-gray-700`}
    }
  `;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = navLinkContent.map((option, index) => (
    <RouterLink
      to={option.to}
      className={({ isActive, isPending }) => {
        if (isActive) {
          setactiveTab(option.name);
          document.title = `Infonomics | ${option.name}`;
          return isActive ? "" : "";
        }
      }}
    >
      <NavLink
        css={[tw`text-black`, activeTab === option.name && tw`border-black`]}
      >
        {option.name}
      </NavLink>
    </RouterLink>
  ));
  return (
    <StyledHeader
      className={`${
        isScrolled ? "opacity-50" : ""
      } transition-opacity duration-300`}
      links={<NavLinks key={"navBar"}> {navLinks}</NavLinks>}
      roundedHeaderButton={true}
      logoLink={defaultLogoLink}
    />
  );
}

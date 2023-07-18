import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColSimple.js";
import Contact from "components/misc/ContactUs";
import MainFeature from "components/features/TwoColWithButton.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import ScrollToTopButton from "components/misc/ScrollToTop";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import TwoColSingleFeatureWithStats2 from "components/features/TwoColSingleFeatureWithStats2";
import PortfolioTwoCardsWithImage from "components/cards/PortfolioTwoCardsWithImage";

import CustomerLoveIconImage from "images/simple-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import { NavBar } from "components/headers/CurrentHeaderDesign";
import { Outlet } from "react-router-dom";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import { ServiceCards } from "data/ServiceData";
export function Home() {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <>
      <Hero roundedHeaderButton={true} />

      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
        cards={ServiceCards}
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />

      <TwoColSingleFeatureWithStats2 />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      />
      <PortfolioTwoCardsWithImage
        subheading="Our Projects"
        cardLinkText="More Info"
        linkText="See More"
        headingHtmlComponent={
          <>
            We've done alot of{" "}
            <span tw="text-primary-500">amazing projects.</span>
          </>
        }
      />
      <ProfileThreeColGrid
        heading="Meet Our Team Leaders."
        subheading="Our Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
            position: "Founder",
            name: "Adam Cuppy",
            links: [
              {
                url: "https://twitter.com",
                icon: TwitterIcon,
              },
              {
                url: "https://linkedin.com",
                icon: LinkedinIcon,
              },
              {
                url: "https://github.com",
                icon: GithubIcon,
              },
            ],
          },
          {
            imageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
            position: "Sr. Designer",
            name: "Charlotte Hale",
            links: [
              {
                url: "https://twitter.com",
                icon: TwitterIcon,
              },
              {
                url: "https://linkedin.com",
                icon: LinkedinIcon,
              },
              {
                url: "https://github.com",
                icon: GithubIcon,
              },
            ],
          },
          {
            imageSrc:
              "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
            position: "Jr. Designer",
            name: "Silvester Wize",
            links: [
              {
                url: "https://twitter.com",
                icon: TwitterIcon,
              },
              {
                url: "https://linkedin.com",
                icon: LinkedinIcon,
              },
              {
                url: "https://github.com",
                icon: GithubIcon,
              },
            ],
          },
        ]}
      />
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc.",
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC",
          },
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Are all the templates easily customizable ?",
            answer:
              "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question:
              "How long do you usually support an standalone template for ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "What kind of payment methods do you accept ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question:
              "Is there a subscribption service to get the latest templates ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Are the templates compatible with the React ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Do you really support Internet Explorer 11 ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ]}
      />
      <Contact />
    </>
  );
}
export default () => {
  const UpdateNotice = tw.div`flex-1 w-full flex-auto mt-32 mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
  const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

  return (
    <>
      <NavBar />
      <div tw="px-5">
        <div tw="mb-20" />
        <ScrollToTopButton />

        <UpdateNotice>
          <UpdateNoticeIcon />
          <div>
            {" "}
            <b>DISCLAIMER:&nbsp;</b> INFONOMICS TECHNOLOGY SERVICES LIMITED is
            not and has&nbsp; <b>NEVER</b>&nbsp; been in partnership with &nbsp;
            <b> RAGEKAY GLOBAL INVESTMENT LIMITED </b>&nbsp;and is not
            affiliated with&nbsp; <b>infonomics.live</b>&nbsp;&nbsp;
            <b>
              <u>
                <a href="/current/about-us#disclaimer">Read more...</a>
              </u>
            </b>
          </div>
        </UpdateNotice>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import TwoColSingleFeatureWithStats2 from "components/features/TwoColSingleFeatureWithStats2";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const StyledButton = tw.button`rounded-md bg-gray-200 py-3 px-3 leading-5 transition hover:bg-primary-400 hover:text-white md:py-4 md:px-5`;
const StyledProject = tw.div`bg-gray-200 hover:scale-105  rounded-xl border px-4 py-4 sm:px-6 sm:py-6 transition   border-gray-900 `;
const StyledLink = tw.a`flex h-12 w-12 items-center justify-center rounded-full transition hover:bg-primary-400 hover:text-white bg-gray-900 text-gray-100`;

export default () => {
  return (
    <>
      <MainFeature1
        subheading={<Subheading>Who are we?</Subheading>}
        heading="We are Infonomics Technology Services Limited."
        description="Formerly PBT Technology Services Nigeria Limited we are an indigenous IT solutions provider with focus on software and data centric applications for actionable insights that consistently position our clients ahead of the competition. We are partner to PBT Group founded as Prescient Business Technologies in 1998 and a major sponsor of the company in 2015 until June, 2018. Infonomics is also a partner to LigaData where we jointly pioneer open-source big data technology for Continuous Decisioning in Nigeria. We collaborate with some of the world’s largest finance, security, and communications companies to help them select and deploy solutions addressing their specific business challenges.
        "
        buttonRounded={false}
        primaryButtonText="Join Our Team"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <TwoColSingleFeatureWithStats2
        heading={
          <>
            We have been doing this <wbr /> since{" "}
            <span tw="text-primary-500">1998.</span>
          </>
        }
      />

      <div id="disclaimer" />
      <MainFeature1
        subheading={
          <Subheading className="font-bold">Who we are not!</Subheading>
        }
        heading={
          <div style={{ fontSize: "1.875rem" }}>
            We are <span className="font-bold text-red-900 "> NOT</span>{" "}
            Infonomics.live
          </div>
        }
        description={
          <div>
            <p>
              Our attention has been drawn to certain notices and or
              publications on some internet website specifically{" "}
              <b>infonomics.live</b> where the name of our reputable company
              INFONOMICS TECHNOLOGY SERVICES LIMITED purporting to connect our
              company with an online technology digital lending App known as
              INFONOMICS LOAN midwifed by RAGEKAY GLOBAL INVESTMENT LIMITED.
              <br />
              <br />
              We hereby alert the public that our company INFONOMICS TECHNOLOGY
              SERVICES LIMITED is not and has never been in partnership with
              RAGEKAY GLOBAL INVESTMENT LIMITED for the purpose of creating or
              operating a lending App called ‘INFONOMICS LOAN’ or any other App
              whatsoever. Our company is not associated in any way with RAGEKAY
              GLOBAL INVESTMENT LIMITED. For avoidance of doubt our company is
              not involved in the business of money lending.
              <br />
              <br />
              Signed,
              <br />
              MANAGEMENT
            </p>
          </div>
        }
        buttonRounded={false}
        primaryButtonText="Join Our Team"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the design space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        description="To be the preferred information management and solution provider in Africa through strong partnership, innovation and domain expertise."
      />
      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="We are a modern design agency."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        description="To ensure the long-term success of our clients through the deployment of effective solutions to manage data from origination, organisation, and interpretation for insightful and actionable intelligence to gain competitive advantage in the market place."
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />

      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Accountability",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: SupportIconImage,
            title: "Integrity",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: SupportIconImage,
            title: "Professionalism",
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
    </>
  );
};

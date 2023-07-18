import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid.js";

import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import ThreeColWithSideImage from "components/features/ThreeColWithSideImage";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import Features from "components/features/ThreeColSimple.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import ContactDetails from "components/cards/ThreeColContactDetails";
const Subheading = tw(SubheadingBase)`mb-4`;

const Heading = tw(SectionHeading)`w-full`;
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const EmailStyle = tw.a`text-sm mt-6 block text-gray-500`;
const Email = ({ children }) => {
  return <EmailStyle href={`mailto:${children}`}>{children}</EmailStyle>;
};
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const StyledButton = tw.button`rounded-md bg-gray-200 py-3 px-3 leading-5 transition hover:bg-primary-400 hover:text-white md:py-4 md:px-5`;
const StyledProject = tw.div`bg-gray-200 hover:scale-105  rounded-xl border px-4 py-4 sm:px-6 sm:py-6 transition   border-gray-900 `;
const StyledLink = tw.a`flex h-12 w-12 items-center justify-center rounded-full transition hover:bg-primary-400 hover:text-white bg-gray-900 text-gray-100`;

export default () => {
  const [filter, setFilter] = useState("all");
  const filters = [
    { label: "All Positions", value: "all" },
    { label: "UI/UX Design", value: "design" },
    { label: "Website Development", value: "website" },
    { label: "Application Development", value: "app" },
    { label: "Digital Marketing", value: "marketing" },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const projects = [
    {
      category: "UI/UX Design",
      title: "Project 1",
      filter: "design",
      location: "New York",
      type: "Full-time",
    },
    {
      category: "Website Development",
      title: "Project 2",
      filter: "website",
      location: "San Francisco",
      type: "Part-time",
    },
    {
      category: "Application Development",
      title: "Project 3",
      filter: "app",
      location: "London",
      type: "Full-time",
    },
    {
      category: "Digital Marketing",
      title: "Project 4",
      filter: "marketing",
      location: "Berlin",
      type: "Contract",
    },
    // Add more project objects as needed
  ];
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.filter === filter);
  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
    },
    { imageSrc: SupportIconImage, title: "24/7 Support" },
    { imageSrc: CustomizeIconImage, title: "Customizable" },
    { imageSrc: ReliableIconImage, title: "Reliable" },
    { imageSrc: FastIconImage, title: "Fast" },
    { imageSrc: SimpleIconImage, title: "Easy" },
  ];
  return (
    <>
      <MainFeature1
        subheading={<Subheading>Careers at Infonomics</Subheading>}
        heading="Come work with us."
        description="We are on a mission to Aute adipisicing fugiat est irure Nulla amet minim dolore enim non mollit eu aliqua aute deserunt across Africa."
        buttonRounded={false}
        primaryButtonText="Join Our Team"
        primaryButtonUrl="#open-position"
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
            imageSrc: ShieldIconImage,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      />
      <ThreeColWithSideImage
        cards={defaultCards}
        heading="Great benefits of working at Infonomics"
        subheading="Benefits and Perks"
      />
      <section className="py-14" tw=" lg:py-32" id="open-position">
        <div tw="container mx-auto">
          <div tw="text-center">
            <Subheading>Open Positions</Subheading>
            <Heading>Come work with us</Heading>
          </div>
          <div tw="overflow-x-auto m-10 w-auto">
            <ul tw="flex items-center gap-2 pb-1 pt-1 rounded-md font-bold md:justify-evenly md:text-base w-auto bg-gray-200">
              {filters.map((filterItem) => (
                <li
                  key={filterItem.value}
                  className={`filter ${
                    filter === filterItem.value ? "active" : ""
                  }`}
                  data-filter={filterItem.value}
                >
                  <StyledButton
                    key={filterItem.value}
                    type="button"
                    onClick={() => handleFilterChange(filterItem.value)}
                    className={
                      filter === filterItem.value
                        ? "bg-primary-500 text-white"
                        : ""
                    }
                    style={{
                      backgroundColor:
                        filter === filterItem.value && "rgb(100,21,255)",
                      color: filter === filterItem.value && "white",
                    }}
                  >
                    {filterItem.label}
                  </StyledButton>
                </li>
              ))}
            </ul>
          </div>
          <div tw=" grid gap-10 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <div className="project" key={index}>
                <StyledProject>
                  <h6 tw="mb-3 text-sm font-black uppercase text-primary-600 hover:text-black">
                    {project.category}
                  </h6>
                  <h4 tw="mb-6 text-lg font-extrabold text-gray-900  sm:text-xl">
                    {project.title}
                  </h4>
                  <div tw="flex items-center space-x-3">
                    <div>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 8.45529C0 3.77836 3.8292 0 8.53659 0C13.244 0 17.0732 3.77836 17.0732 8.45529C17.0732 11.3641 15.3769 14.235 13.5791 16.3248C12.6693 17.3823 11.7037 18.2751 10.852 18.9101C10.4268 19.227 10.0181 19.4886 9.64923 19.6744C9.30343 19.8485 8.90853 20 8.53659 20C8.16464 20 7.76974 19.8485 7.42394 19.6744C7.05506 19.4886 6.6464 19.227 6.22121 18.9101C5.36948 18.2751 4.40386 17.3823 3.49409 16.3248C1.69631 14.235 0 11.3641 0 8.45529ZM8.53661 10.9748C6.92017 10.9748 5.60978 9.66437 5.60978 8.04792C5.60978 6.43148 6.92017 5.12109 8.53661 5.12109C10.1531 5.12109 11.4634 6.43148 11.4634 8.04792C11.4634 9.66437 10.1531 10.9748 8.53661 10.9748Z"
                          fill="#FFBD11"
                        ></path>
                      </svg>
                    </div>
                    <div tw="font-bold text-gray-900  text-base sm:text-lg">
                      {project.location} -{" "}
                      <span tw="text-purple-600">{project.type}</span>
                    </div>
                  </div>
                  <div tw="flex justify-end">
                    <StyledLink href="javascript:">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.41083 14.4102L10.5892 15.5885L16.1783 9.99932L10.5892 4.41016L9.41083 5.58849L12.9883 9.16599H5V10.8327H12.9883L9.41083 14.4102Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </StyledLink>
                  </div>
                </StyledProject>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <ContactDetails
        cards={[
          {
            title: "New York",
            description: (
              <>
                <Address>
                  <AddressLine>40 Gates Court</AddressLine>
                  <AddressLine>Endicott, NY 13760</AddressLine>
                </Address>
                <Email>contact@infonimics.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "Illinois",
            description: (
              <>
                <Address>
                  <AddressLine>602 Annadale Drive</AddressLine>
                  <AddressLine>Dekalb, IL 60115</AddressLine>
                </Address>
                <Email>contact@infonimics.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "California",
            description: (
              <>
                <Address>
                  <AddressLine>96 NE. Delaware Lane</AddressLine>
                  <AddressLine>Sacramento, CA 95820</AddressLine>
                </Address>
                <Email>contact@infonimics.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "Tennessee",
            description: (
              <>
                <Address>
                  <AddressLine>74 Peachtree Ave.</AddressLine>
                  <AddressLine>Dyersburg, TN 38024</AddressLine>
                </Address>
                <Email>contact@infonimics.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "New Jersey",
            description: (
              <>
                <Address>
                  <AddressLine>8355 Summer Street</AddressLine>
                  <AddressLine>Manchester, NJ 08759</AddressLine>
                </Address>
                <Email>contact@infonimics.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "Ohio",
            description: (
              <>
                <Address>
                  <AddressLine>7713 Snake Hill Ave.</AddressLine>
                  <AddressLine>Piqua, OH 45356</AddressLine>
                </Address>
                <Email>contact@infonimics.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid.js";

import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

export default () => {
  return (
    <>
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

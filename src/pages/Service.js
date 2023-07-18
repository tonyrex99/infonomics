import Features from "components/features/ThreeColSimple.js";
import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground";
import { ServiceCards } from "data/ServiceData";
import Slider from "components/cards/ThreeColSlider";
import MainFeature1 from "components/features/TwoColWithButton.js";

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const Heading = tw.span`lowercase`;
const HighlightedText = tw.span`text-primary-500`;

export default () => {
  return (
    <div>
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
        cards={ServiceCards}
      />
      <ThreeColCenteredStatsPrimaryBackground />
      <Slider />
      <MainFeature1
        subheading={<Subheading>How We Do It?</Subheading>}
        heading=""
        description="Irure cupidatat aute et aute et magna qui enim reprehenderit. Esse amet commodo ad enim voluptate consequat adipisicing do ex excepteur incididunt irure. Aliquip proident voluptate pariatur incididunt et fugiat voluptate duis proident officia magna. Amet occaecat nostrud velit tempor."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        primaryButtonUrl="contact-us"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
    </div>
  );
};
/**
 * @todo
 * what tecbologies do we use?
 * we work wit best patners. slick slider underneath auto scrolling logos and names of top partners
 */

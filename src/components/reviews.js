import React from 'react';
import Section from './section';
import Carousel from './carousel';

const Reviews = () => {

  return (
    <Section
      id={"reviews"}
    >
      <div>
        <h1>
          Join other thousands of people growing with Kobodrop
        </h1>
        <div className="flex-gap">
          <img
            src="apple-badge.png"
            alt="apple-badge"
            className="h-10"
          />
          <img
            src="android-badge.png"
            alt="android-badge"
            className="h-10"
          />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </Section>
  );
};

export default Reviews;

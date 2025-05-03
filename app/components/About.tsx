"use client";

import React from "react";

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      {/* Orange section with heading and right-aligned paragraph */}
      <div
        ref={ref}
        className="min-h-screen py-4 gap-12 h-full px-8 md:px-24 flex flex-col justify-center"
      >
        <div className="max-w-5xl mb-4 md:mb-8">
          <h2 className="text-3xl md:text-6xl leading-tight font-bold">
            At Fresh Entertainment, we don't just create events; we create
            experiences that inspire, captivate, and connect. Whether you're
            celebrating a milestone, hosting a cultural showcase, or launching a
            brand, we'll make it unforgettable.
          </h2>
        </div>
        <div className="w-full flex justify-end -mt-2 md:-mt-4">
          <p className="text-xl sm:text-lg md:text-3xl leading-relaxed text-right max-w-2xl">
            We blend cultural authenticity with cutting-edge technology to
            deliver experiences that resonate deeply with audiences and create
            lasting impressions.
          </p>
        </div>
      </div>
    </>
  );
});

export default About;

import React from "react";
import "./Tagline.css";

const Tagline = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="w-full min-h-screen flex flex-col items-center justify-center text-black"
    style={{ fontFamily: 'Inter, Arial, sans-serif' }}
  >
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h1
        className="text-6xl sm:text-6xl md:text-8xl font-extrabold uppercase text-center leading-none tracking-tight"
      >
        Where Imagination<br />
        Becomes {" "}
        <span className="relative inline-block flip-group">
          <span className="block flip-front">Reality</span>
          <span className="block absolute left-0 top-0 w-full flip-back">Magic</span>
        </span>
      </h1>
      <div
        className="mt-8 text-lg sm:text-2xl md:text-3xl font-semibold text-center tracking-wide transition-all duration-300 hover:tracking-widest"
      >
        Experience the extraordinary, effortlessly.
      </div>
    </div>
  </section>
));

export default Tagline; 
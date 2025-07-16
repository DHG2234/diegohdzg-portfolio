// src/components/DemoReel.jsx
import React from "react";

const DemoReel = () => {
  return (
    <section id="demo-reel" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16r">
      <h1 className="title text-4xl font-bold text-center text-[#001b5e] py-4">Demo Reel</h1>

      <div className="aspect-video w-full max-w-4xl">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/BHdRjgF_mKg?si=I__YciCAjJRcfpG0"
          title="Demo Reel"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default DemoReel;
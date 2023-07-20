import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Video = () => {
  return (
    <div>
      <section className="bg-white mt-28 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <Fade>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                We Represent The best Cricket Classes
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                We pride ourselves on using the latest equipment and technology
                to create an immersive training environment. Our
                state-of-the-art facilities offer a perfect blend of
                professional infrastructure and a welcoming atmosphere. Whether
                it's honing your batting, perfecting your bowling action, or
                sharpening your fielding skills, our academy provides the ideal
                platform for you to excel.
              </p>
            </Fade>
          </div>
          <div>
            <Zoom>
              <iframe
                className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                src="https://www.youtube.com/embed/ETrVH2T7ECg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboardWrite; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Zoom>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;

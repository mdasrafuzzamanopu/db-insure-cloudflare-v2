import Image from "next/image";
import { memo } from "react";
import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

// import { fadeIn } from "../variants";
import { getVideoIdFromUrl, sanitizeString } from "../utils/utils";
import YouTubeFrame from "./YouTubeFrame";

const ImageSlider = dynamic(() => import("./ImageSlider"), { ssr: false });
const RichTextComponents = dynamic(() => import("./RichTextComponents"), {
  ssr: false,
});

const ProjectHero = ({ project, imagesOnRight = true }) => {
  const { heading, title, content, images, url, youtubeVideoUrl } = project;
  return (
    <div className="items-center justify-center max-w-screen-xl gap-6 px-4 overflow-hidden md:flex-row bg-hero">
      {heading && (
        <div className="flex flex-col w-full mb-4 text-center">
          <h2 className="h3 xl:mt-8">{heading}</h2>
        </div>
      )}

      <div className="flex flex-col justify-center max-w-screen-xl gap-6 px-4 mb-10 overflow-hidden items-left md:flex-row bg-hero">
        <div
          // variants={fadeIn("down", 0.6)}
          // initial="hidden"
          // animate="show"
          // exit="hidden"
          className={`flex w-full p-0 md:p-4 md:w-1/2 ${
            imagesOnRight
              ? "md:order-2 md:justify-end"
              : "md:order-1 md:justify-start"
          }`}
        >
          {youtubeVideoUrl ? (
            <YouTubeFrame
              videoUrl={`https://www.youtube.com/embed/${getVideoIdFromUrl(
                youtubeVideoUrl
              )}?rel=0&showinfo=1&autoplay=1`}
              thumbnailUrl={`https://img.youtube.com/vi/${getVideoIdFromUrl(
                youtubeVideoUrl
              )}/hqdefault.jpg`}
              isYoutubeVideo={true}
              // videoUrl={url}
              // imageUrl="/video_thumbnail.webp"
              width={500}
              height={300}
            />
          ) : images && images.length > 1 ? (
            <ImageSlider
              images={images}
              className="w-[400px] md:h-[400px] h-[180px] flex md:items-center overflow-hidden rounded-md"
            />
          ) : images && images.length === 1 ? (
            <Image
              src={sanitizeString(images[0])}
              alt="Hero"
              width={500}
              height={400}
              objectFit="contain"
              className="transition-transform duration-300 ease-in-out transform rounded-lg"
            />
          ) : (
            <iframe
              src={url}
              loading="lazy"
              // style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
              width={500}
              height={300}
              frameBorder={0}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen="true"
              className="w-full transition-transform duration-300 ease-in-out transform rounded-lg aspect-video"
            ></iframe>
          )}
        </div>
        <div
          className={`text-center flex md:w-[50vw] lg:w-[30vw] flex-col md:text-left mb-4 md:mb-0 place-content-center ${
            imagesOnRight ? "md:order-1" : "md:order-2"
          }`}
        >
          <h2
            // variants={fadeIn("up", 0.2)}
            // initial="hidden"
            // animate="show"
            // exit="hidden"
            className="h2"
          >
            {title}
            <span className="text-accent">.</span>
          </h2>
          <div
            // variants={fadeIn("up", 0.4)}
            // initial="hidden"
            // animate="show"
            // exit="hidden"
            className="mb-4 mx-w-[400px] mx-auto lg:mx-0 text-white/60"
          >
            <PortableText value={content} components={RichTextComponents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectHero);

import Image from "next/image";
import { useRef } from "react";
import { FaPlay } from "react-icons/fa";

export default function YouTubeFrame({
  isYoutubeVideo,
  videoUrl,
  thumbnailUrl,
  width,
  height,
}) {
  const divRef = useRef(null);

  const onClick = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "class",
      "w-full transition-transform duration-300 ease-in-out transform rounded-lg aspect-video"
    );
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allowFullScreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("width", width);
    iframe.setAttribute("height", height);
    iframe.setAttribute("src", videoUrl);
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <div
      ref={divRef}
      className="rounded-lg w-[90vw] md:w-[500px] h-full relative overflow-hidden"
    >
      {isYoutubeVideo ? (
        <Image
          src="/youtube.png"
          alt="Play Icon"
          width={64}
          height={64}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          onClick={onClick}
        />
      ) : (
        <FaPlay
          size={64}
          className="absolute hover:text-accent"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          onClick={onClick}
        />
      )}
      <Image
        onClick={onClick}
        src={thumbnailUrl}
        // src={`https://img.youtube.com/vi/${videoid}/hqdefault.jpg`}
        alt="YouTube Video Thumbnail"
        width={width}
        height={height}
        priority
        loading="eager"
        className="rounded-lg h-[auto]"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/kvUnpUAAAAASUVORK5CYII="
      />
    </div>
  );
}

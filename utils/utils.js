import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../components/SanityClient";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaCameraRetro, FaTv, FaLaptopCode } from "react-icons/fa";
import { RiAdvertisementFill, RiLiveFill } from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";

export const sanitizeString = (str) => {
  return str.replace(/[\u200B-\u200D\uFEFF]/g, "");
};

export const appendStateName = (text, stateName) => {
  if (!text) return "";
  const sanitizedText = sanitizeString(text);
  return sanitizedText.replace(/["']?\b[Yy]our [Ss]tate\b["']?/g, stateName);
};

const builder = ImageUrlBuilder(client);

export const extractImageUrlFor = (source) => {
  if (!source) {
    console.error(
      "Error: Unable to resolve image URL from source because the source is null or undefined."
    );
    return null;
  }

  return builder.image(source).url();
};

export const renderText = (text, stateName) => {
  const textWithState = appendStateName(text, stateName);
  return getChunks({
    str: textWithState,
    stateName,
    redWords: [],
  });
};

export const getRandomWordFrom = ({ exactTill, targetWord }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return targetWord
    .split("")
    .map((letter, index) => {
      if (letter === " ") {
        return " ";
      }
      if (index <= exactTill) {
        return targetWord[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    })
    .join("");
};

export const getPageTitleByPath = (path) => {
  switch (path) {
    case "/":
      return "Contractors Page | DB Insure";
    case "/about":
      return "About | DB Insure";
    case "/contact":
      return "Contact | DB Insure";
    case "/work":
      return "Works | DB Insure";
    case "/services":
      return "Services | DB Insure";
    case "/testimonial":
      return "Testimonials | DB Insure";
    case "/thank-you":
      return "Contact | DB Insure";
    case "/commercial-property":
      return "Commercial Property Page | DB Insure";
    case "/liquor-liability":
      return "Liquor Liability Page | DB Insure";
    case "/builders-risk":
      return "Builders Risk Page | DB Insure";
    default:
      return "DB Insure";
  }
};

export const transformVideoURL = (url) => {
  const youTubeRegex =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(youTubeRegex);

  if (match && match[2].length === 11) {
    const videoId = match[2];
    return `https://www.youtube.com/embed/${videoId}?modestbranding=1&autohide=1&showinfo=0&controls=0`;
  }

  return url;
};

export const getVideoIdFromUrl = (url) => {
  if (!url) return null;
  const videoIdRegex =
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
  const match = url.match(videoIdRegex);
  return match ? match[1] : null;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getImageSource(image, url) {
  if (process.env.IMAGE_SOURCE === "sanity") {
    return extractImageUrlFor(image);
  }
  return url;
}

export const getServiceIcon = (service) => {
  switch (service) {
    case "web":
      return <FaLaptopCode />;
    case "advertisments":
      return <RiAdvertisementFill />;
    case "event":
      return <RiLiveFill />;
    case "shorts":
      return <FaCameraRetro />;
    case "remix":
      return <MdVideoLibrary />;
    case "series":
      return <PiTelevisionSimpleFill />;
    default:
      return <FaTv />;
  }
};

export function transformWordsInString({ str, stateName, redWords = [] }) {
  const stateNameWords = stateName.split(" ").map((word) => word.toLowerCase());
  const redWordsInLowerCase = redWords.map((word) =>
    sanitizeString(word).toLowerCase()
  );

  let result = [];
  let spanWords = "";
  let isPrevWordRed = null;

  str.split(" ").forEach((word, index, arr) => {
    const sanitizedWord = sanitizeString(word).toLowerCase();
    const isState = stateNameWords.includes(sanitizedWord);
    const isWordRed = redWordsInLowerCase.includes(sanitizedWord) || isState;

    if (isPrevWordRed !== null && isPrevWordRed !== isWordRed) {
      result.push(
        <span
          key={result.length}
          className={isPrevWordRed ? "text-accent" : ""}
        >
          {spanWords}
        </span>
      );
      spanWords = word + " ";
    } else {
      spanWords += word + " ";
    }
    isPrevWordRed = isWordRed;
  });

  if (spanWords) {
    result.push(
      <span key={result.length} className={isPrevWordRed ? "text-accent" : ""}>
        {spanWords}
      </span>
    );
  }

  return result;
}

export function getChunks({ str, stateName, redWords = [] }) {
  const stateNameWords = stateName.split(" ").map((word) => word.toLowerCase());
  const redWordsInLowerCase = redWords.map((word) =>
    sanitizeString(word).toLowerCase()
  );

  let spanWords = "";
  let isPrevWordRed = null;

  let textChunks = "";
  str.split(" ").forEach((word, index, arr) => {
    const sanitizedWord = sanitizeString(word).toLowerCase();
    const isState = stateNameWords.includes(sanitizedWord);
    const isWordRed = redWordsInLowerCase.includes(sanitizedWord) || isState;

    if (isPrevWordRed !== null && isPrevWordRed !== isWordRed) {
      textChunks += `<span class="${isPrevWordRed ? "text-accent" : ""}">${spanWords}</span>`;
      spanWords = word + " ";
    } else {
      spanWords += word + " ";
    }
    isPrevWordRed = isWordRed;
  });

  if (spanWords) {
    textChunks += `<span class="${isPrevWordRed ? "text-accent" : ""}">${spanWords}</span>`;
  }

  return textChunks;
}

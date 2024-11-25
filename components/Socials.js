import Link from "next/link";
import {
  RiBehanceLine,
  RiDribbbleLine,
  RiFacebookLine,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="items-center hidden text-lg md:flex gap-x-5">
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
        alt="youtube"
        aria-label="youtube"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
        alt="facebook"
        aria-label="facebook"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
        alt="instagram"
        aria-label="instagram"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
        alt="dribble"
        aria-label="dribble"
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
        alt="behance"
        aria-label="behance"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
        alt="pinterest"
        aria-label="pinterest"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;

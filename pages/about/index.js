import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import Circles from "../../components/Circles";
import { RichTextComponents } from "../../components/RichTextComponents";
import { fetchAboutData } from "../../data/sanity-data-fetch";
import { sanitizeString } from "../../utils/utils";
import { fadeIn } from "../../variants";
export const runtime = "experimental-edge";
export async function getServerSideProps() {
  const { heading, redWords, description, image } = await fetchAboutData();
  return {
    props: {
      heading,
      redWords,
      description,
      image,
    },
  };
}

const About = ({ heading, redWords, description, image }) => {
  const renderHeading = () => {
    if (!heading) return null; // Return null if heading is not available

    const sanitizedHeading = heading || "";

    // Ensure redWords is an array and not undefined
    const redWordsInLowerCase = Array.isArray(redWords)
      ? redWords.map((word) => sanitizeString(word).toLowerCase())
      : [];

    return sanitizedHeading.split(" ").map((word, index) => {
      const isRedWord = redWordsInLowerCase.includes(
        sanitizeString(word).toLowerCase()
      );

      return (
        <span key={index} className={isRedWord ? "text-accent" : ""}>
          {word}
          {index !== sanitizedHeading.split(" ").length - 1 && " "}
        </span>
      );
    });
  };

  return (
    <div className="h-full py-32 text-center bg-black md:bg-[#131424]/30 xl:text-left">
      <div className="container flex flex-col items-center h-full mx-auto gap-x-6">
        <div className="flex flex-col items-center justify-center flex-1 gap-4 md:gap-6">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center h2"
          >
            {heading && heading.trim() !== "" ? (
              renderHeading()
            ) : (
              <>
                About
                <span className="text-accent"> us.</span>
              </>
            )}
          </motion.h2>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="rounded w-[400px] h-full">
              <Image
                src={image || "/man-smoking.jpg"} // Use the image prop if available
                alt="About"
                className="object-contain rounded-lg"
                width={400}
                height={300}
                priority={true}
              />
            </div>
            <div className="flex flex-col flex-1 px-4 mb-24 space-y-8 md:px-0">
              <div className="flex flex-col space-y-2 text-center md:text-left">
                <PortableText
                  value={description}
                  components={RichTextComponents}
                />
              </div>
              <div>
                <Link
                  href="/contact"
                  className="w-[240px] md:w-auto inline-flex items-center justify-center py-3 font-medium tracking-normal text-center text-white no-underline rounded-md transition-all duration-150 ease-in-out bg-[#125b9a] cursor-pointer hover:bg-[#18446a] px-7 text-transform-none"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:max-w-[48%] h-[480px]"></div>
      </div>
      <Circles
        id="circles"
        className="fixed right-0 z-10 translate-x-32 bg-inherit top-2/3 md:translate-x-16 translate-y-2/3"
      />
    </div>
  );
};

export default About;

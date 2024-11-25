import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getImageSource } from "../../utils/utils";
import { fetchThankData } from "../../data/sanity-data-fetch";

const DEFAULT_TITLE = "Thank you";
const DEFAULT_MESSAGE = "Your message was sent successfully";
const DEFAULT_IMAGE = "/laptop.png";

export async function getServerSideProps() {
  const { title, message, thankbgImage, thankbgImageUrl } =
    await fetchThankData();

  return {
    props: {
      title: title || DEFAULT_TITLE,
      message: message || DEFAULT_MESSAGE,
      thankImage:
        getImageSource(thankbgImage, thankbgImageUrl) || DEFAULT_IMAGE,
    },
  };
}

const ThankYouPage = ({ title, message, thankImage }) => {
  return (
    <div className="bg-primary/30 flex flex-col items-center justify-center h-[100vh] gap-8">
      <Image src={thankImage} alt="Thank you" width={400} height={100} />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-2xl font-bold text-white capitalize md:text-3xl lg:text-4xl">
          {title}
        </p>
        <p className="text-sm font-normal text-gray-300 md:text-base lg:text-lg">
          {message}
        </p>

        <Link
          href="/"
          className="transition duration-150 ease-in-out bg-transparent border-2 border-white rounded-none shadow-md cursor-pointer hover:bg-transparent hover:border-[#ef4444] text-white sb-component sb-component-block sb-component-button sb-component-button-primary mt-5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;

import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import FeaturedItemsSection from "../components/FeaturedItemsSection";
import FeatureHighlightSection from "../components/FeatureHighlightSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServicesSection from "../components/ServicesSection";
import { insuranceFormProps } from "../data/contactSectionData";
import ProjectHero from "../components/ProjectHero";
import {
  featureHighlights2Props,
  featureHighlightsProps,
} from "../data/featuredHighlightsData";
import { featuredItems2Props } from "../data/featuredItemsData";
import { fetchHomepageData } from "../data/sanity-data-fetch";
import { testimonialsProps } from "../data/testimonialSectionData";
import { getImageSource, sanitizeString } from "../utils/utils";

const Particles = dynamic(() => import("../components/ParticlesContainer"), {
  ssr: false,
});

const Bulb = dynamic(() => import("../components/Bulb"), {
  ssr: false,
});
const Circles = dynamic(() => import("../components/Circles"), {
  ssr: false,
});

export async function getServerSideProps() {
  const homepageData = await fetchHomepageData();
  return {
    props: homepageData,
  };
}

const Home = ({
  heading,
  subHeading,
  redWords,
  bgImageDesktopUrl,
  bgImageMobileUrl,
  contactFormTitle,
  contactFormSubTitle,
  contactFormImage,
  contactFormImageUrl,
  servicesTitle,
  servicesSubtitle,
  services,
  commercialConstructionTitle,
  commercialConstructionSubTitle,
  youtubeVideoHeading,
  youtubeVideoTitle,
  youtubeVideoDescription,
  youtubeVideoUrl,
  featureHighlightLable,
  featureHighlightText,
  featureHighlights2title,
  featureHighlights2text,
  featureHighlights2Image,
  featureHighlights2ImageUrl,
  testimonialsSectionQuote,
  testimonialsSectionName,
  testimonialsSectionPost,
  commercialConstructionItems,
  testimonialsSectionImage,
  testimonialsSectionImageUrl,
  featureHighlightImage,
  featureHighlightImageUrl,
}) => {
  const [bgImage, setBgImage] = useState("");
  const contactRef = useRef(null);

  const contactImage = getImageSource(contactFormImage, contactFormImageUrl);
  const contactFormData = {
    ...insuranceFormProps,
    title: contactFormTitle,
    text: contactFormSubTitle,
    form: {
      ...insuranceFormProps.form,
      elementId: "contractor-insurance",
    },
    ...(contactImage && {
      media: {
        type: "ImageBlock",
        url: contactImage,
        altText: "Contact Form Image",
      },
    }),
  };

  const commercialConstructionData = {
    ...featuredItems2Props,
    title: commercialConstructionTitle,
    subtitle: commercialConstructionSubTitle,
    items: (commercialConstructionItems || []).map(
      (commercialConstructionItem) => ({
        type: "FeaturedItem",
        title: commercialConstructionItem.constructionTitle || "",
        text: commercialConstructionItem.constructionTitle
          ? `<p>${commercialConstructionItem.constructionShortDescription}</p>`
          : "",
        featuredImage: {
          type: "ImageBlock",
          url: commercialConstructionItem.imageConfig || "",
          altText: commercialConstructionItem.constructionTitle || "",
        },
        styles: {
          self: {
            textAlign: "center",
          },
        },
      })
    ),
  };

  const featureHighImage = getImageSource(
    featureHighlightImage,
    featureHighlightImageUrl
  );
  const featureHighlightData = {
    ...featureHighlightsProps,
    badge: {
      label: featureHighlightLable,
    },
    text: featureHighlightText,
    ...(featureHighImage && {
      media: {
        type: "ImageBlock",
        url: featureHighImage,
        altText: featureHighlightLable || "Contractors Insurance",
      },
    }),
  };

  const featureHigh2Image = getImageSource(
    featureHighlights2Image,
    featureHighlights2ImageUrl
  );
  const featureHighlights2Data = {
    ...featureHighlights2Props,
    label: featureHighlights2title,
    text: featureHighlights2text,
    ...(featureHigh2Image && {
      media: {
        type: "ImageBlock",
        url: featureHigh2Image,
        altText: featureHighlights2title || "Feature Highlight Image",
      },
    }),
  };
  const testimonialImage = getImageSource(
    testimonialsSectionImage,
    testimonialsSectionImageUrl
  );
  const testimonialsPropsData = {
    ...testimonialsProps,
    testimonials: [
      {
        ...testimonialsProps.testimonials[0],
        quote: `<p className="text-white">"${testimonialsSectionQuote}"</p>`,
        name: testimonialsSectionName,
        title: testimonialsSectionPost,
        ...(testimonialImage !== 0 && {
          image: {
            type: "ImageBlock",
            url: testimonialImage,
            altText: "Contractors Insurance",
            elementId: "Contractors Insurance",
          },
        }),
      },
    ],
    styles: {
      self: {
        height: "auto",
        width: "wide",
        margin: ["mt-0", "mb-0", "ml-0", "mr-0"],
        padding: ["pt-24", "pb-36", "pl-4", "pr-4"],
        justifyContent: "center",
      },
      title: {
        textAlign: "left",
      },
      subtitle: {
        textAlign: "left",
      },
    },
  };
  useEffect(() => {
    const bgImageLarge = bgImageDesktopUrl;
    const bgImageSmall = bgImageMobileUrl;
    const responsiveBgImage =
      typeof window !== "undefined" && window.innerWidth > 768
        ? bgImageLarge
        : bgImageSmall;
    setBgImage(responsiveBgImage);
  }, []);

  return (
    <div className="relative flex flex-col ">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="relative min-h-[100vh] flex flex-col justify-start md:justify-center items-center py-24 md:py-0 bg-center bg-cover z-20"
      >
        <HeroSection
          heading={heading}
          subHeading={subHeading}
          redWords={redWords}
          contactRef={contactRef}
        />
        <div className="absolute bottom-0 right-0 z-30 w-full h-full">
          {typeof window !== "undefined" && window.innerWidth > 768 ? (
            <Suspense fallback={null}>
              <Particles />
            </Suspense>
          ) : (
            <Suspense fallback={null}>{null}</Suspense>
          )}
        </div>
      </div>
      {typeof window !== "undefined" && window.innerWidth > 768 && (
        <>
          <Bulb
            id="bulb"
            className="fixed left-0 z-10 pointer-events-none -bottom-10 -translate-x-44 mix-blend-hard-light bg-inherit md:-translate-x-36"
          />
          <Circles
            id="circles"
            className="fixed bottom-0 right-0 z-10 pointer-events-none translate-x-36 mix-blend-hard-light bg-inherit md:translate-x-16"
          />
        </>
      )}
      <div className="flex flex-col items-center w-full">
        <div ref={contactRef} className="flex justify-center">
          <ContactSection {...contactFormData} />
        </div>
        <ServicesSection
          services={services}
          servicesTitle={servicesTitle}
          servicesSubtitle={servicesSubtitle}
        />
        <FeaturedItemsSection {...commercialConstructionData} />
        <div className="flex justify-center mt-12 mb-12">
          {youtubeVideoUrl && (
            <ProjectHero
              project={{
                heading: sanitizeString(youtubeVideoHeading || ""),
                title: sanitizeString(youtubeVideoTitle || ""),
                content: youtubeVideoDescription,
                youtubeVideoUrl,
                images: [],
              }}
            />
          )}
        </div>
        <FeatureHighlightSection {...featureHighlightData} />
        <FeatureHighlightSection {...featureHighlights2Data} />
        <TestimonialsSection {...testimonialsPropsData} />
      </div>
    </div>
  );
};

export default Home;

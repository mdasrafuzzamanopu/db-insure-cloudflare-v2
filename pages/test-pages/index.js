import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import HeroSection from "../../components/HeroSection";
import ContactSection from "../../components/ContactSection";
import FeaturedItemsSection from "../../components/FeaturedItemsSection";
import FeatureHighlightSection from "../../components/FeatureHighlightSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import ServicesSection from "../../components/ServicesSection";
import { insuranceFormProps } from "../../data/contactSectionData";
import ProjectHero from "../../components/ProjectHero";
import {
  featureHighlights2Props,
  featureHighlightsProps,
} from "../../data/featuredHighlightsData";
import { featuredItems2Props } from "../../data/featuredItemsData";
import { fetchHomepageData } from "../../data/sanity-data-fetch";
import { testimonialsProps } from "../../data/testimonialSectionData";
import { getImageSource, sanitizeString } from "../../utils/utils";

export const runtime = "experimental-edge";

// Dynamically import non-critical components
const Particles = dynamic(() => import("../../components/ParticlesContainer"), {
  ssr: false,
});
const Bulb = dynamic(() => import("../../components/Bulb"), { ssr: false });
const Circles = dynamic(() => import("../../components/Circles"), { ssr: false });

export async function getServerSideProps() {
  try {
    const homepageData = await fetchHomepageData();
    return {
      props: homepageData || {}, // Ensure props always return an object
    };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {
      props: {},
    };
  }
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

  // Helper function to get the correct background image based on viewport size
  useEffect(() => {
    const updateBgImage = () => {
      const bgImageLarge = bgImageDesktopUrl;
      const bgImageSmall = bgImageMobileUrl;
      setBgImage(window.innerWidth > 768 ? bgImageLarge : bgImageSmall);
    };
    updateBgImage();
    window.addEventListener("resize", updateBgImage);
    return () => window.removeEventListener("resize", updateBgImage);
  }, [bgImageDesktopUrl, bgImageMobileUrl]);

  // Memoized data transformations for better performance
  const contactImage = getImageSource(contactFormImage, contactFormImageUrl);
  const contactFormData = {
    ...insuranceFormProps,
    title: contactFormTitle,
    text: contactFormSubTitle,
    form: {
      ...insuranceFormProps.form,
      elementId: "contractor-insurance",
    },
    media: contactImage
      ? {
          type: "ImageBlock",
          url: contactImage,
          altText: "Contact Form Image",
        }
      : undefined,
  };

  const commercialConstructionData = {
    ...featuredItems2Props,
    title: commercialConstructionTitle,
    subtitle: commercialConstructionSubTitle,
    items: (commercialConstructionItems || []).map((item) => ({
      type: "FeaturedItem",
      title: item.constructionTitle || "",
      text: item.constructionShortDescription
        ? `<p>${item.constructionShortDescription}</p>`
        : "",
      featuredImage: {
        type: "ImageBlock",
        url: item.imageConfig || "",
        altText: item.constructionTitle || "",
      },
      styles: {
        self: { textAlign: "center" },
      },
    })),
  };

  const featureHighlightData = {
    ...featureHighlightsProps,
    badge: { label: featureHighlightLable },
    text: featureHighlightText,
    media: featureHighlightImage
      ? {
          type: "ImageBlock",
          url: getImageSource(featureHighlightImage, featureHighlightImageUrl),
          altText: featureHighlightLable || "Contractors Insurance",
        }
      : undefined,
  };

  const testimonialsPropsData = {
    ...testimonialsProps,
    testimonials: [
      {
        ...testimonialsProps.testimonials[0],
        quote: `<p className="text-white">"${testimonialsSectionQuote}"</p>`,
        name: testimonialsSectionName,
        title: testimonialsSectionPost,
        image: testimonialsSectionImage
          ? {
              type: "ImageBlock",
              url: getImageSource(
                testimonialsSectionImage,
                testimonialsSectionImageUrl
              ),
              altText: "Contractors Insurance",
            }
          : undefined,
      },
    ],
  };

  return (
    <div className="relative flex flex-col">
      {/* Hero Section */}
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

      {/* Non-critical visual elements */}
      {typeof window !== "undefined" && window.innerWidth > 768 && (
        <>
          <Bulb className="fixed left-0 -bottom-10 -translate-x-36 mix-blend-hard-light" />
          <Circles className="fixed bottom-0 right-0 translate-x-16 mix-blend-hard-light" />
        </>
      )}

      {/* Main Content */}
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
        {youtubeVideoUrl && (
          <ProjectHero
            project={{
              heading: sanitizeString(youtubeVideoHeading || ""),
              title: sanitizeString(youtubeVideoTitle || ""),
              content: youtubeVideoDescription,
              youtubeVideoUrl,
            }}
          />
        )}
        <FeatureHighlightSection {...featureHighlightData} />
        <TestimonialsSection {...testimonialsPropsData} />
      </div>
    </div>
  );
};

export default Home;

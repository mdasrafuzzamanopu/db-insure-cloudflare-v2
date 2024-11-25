import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState, useMemo } from "react";
import HeroSection from "../../components/HeroSection";
import ContactSection from "../../components/ContactSection";
import FeaturedItemsSection from "../../components/FeaturedItemsSection";
import FeatureHighlightSection from "../../components/FeatureHighlightSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import ServicesSection from "../../components/ServicesSection";
import ProjectHero from "../../components/ProjectHero";
import { insuranceFormProps } from "../../data/contactSectionData";
import { fetchHomepageData } from "../../data/sanity-data-fetch";
import { featureHighlights2Props, featureHighlightsProps } from "../../data/featuredHighlightsData";
import { featuredItems2Props } from "../../data/featuredItemsData";
import { testimonialsProps } from "../../data/testimonialSectionData";
import { getImageSource, sanitizeString } from "../../utils/utils";

export const runtime = "experimental-edge";

const Particles = dynamic(() => import("../../components/ParticlesContainer"), { ssr: false });
const Bulb = dynamic(() => import("../../components/Bulb"), { ssr: false });
const Circles = dynamic(() => import("../../components/Circles"), { ssr: false });

export async function getServerSideProps() {
  try {
    const homepageData = await fetchHomepageData();
    return { props: homepageData || {} };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return { props: {} };
  }
}

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const Home = (props) => {
  const {
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
  } = props;

  const [bgImage, setBgImage] = useState("");
  const contactRef = useRef(null);

  useEffect(() => {
    const updateBgImage = () => {
      setBgImage(window.innerWidth > 768 ? bgImageDesktopUrl : bgImageMobileUrl);
    };
    const debouncedUpdate = debounce(updateBgImage, 100);
    updateBgImage();
    window.addEventListener("resize", debouncedUpdate);
    return () => window.removeEventListener("resize", debouncedUpdate);
  }, [bgImageDesktopUrl, bgImageMobileUrl]);

  const contactImage = useMemo(
    () => getImageSource(contactFormImage, contactFormImageUrl),
    [contactFormImage, contactFormImageUrl]
  );

  const contactFormData = useMemo(
    () => ({
      ...insuranceFormProps,
      title: contactFormTitle,
      text: contactFormSubTitle,
      form: { ...insuranceFormProps.form, elementId: "contractor-insurance" },
      media: contactImage
        ? { type: "ImageBlock", url: contactImage, altText: "Contact Form Image" }
        : undefined,
    }),
    [contactFormTitle, contactFormSubTitle, contactImage]
  );

  const commercialConstructionData = useMemo(
    () => ({
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
        styles: { self: { textAlign: "center" } },
      })),
    }),
    [commercialConstructionTitle, commercialConstructionSubTitle, commercialConstructionItems]
  );

  const featureHighlightData = useMemo(
    () => ({
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
    }),
    [featureHighlightLable, featureHighlightText, featureHighlightImage, featureHighlightImageUrl]
  );

  const featureHighlights2Data = useMemo(
    () => ({
      ...featureHighlights2Props,
      label: featureHighlights2title,
      text: featureHighlights2text,
      media: featureHighlights2Image
        ? {
            type: "ImageBlock",
            url: getImageSource(featureHighlights2Image, featureHighlights2ImageUrl),
            altText: featureHighlights2title || "Feature Highlight Image",
          }
        : undefined,
    }),
    [featureHighlights2title, featureHighlights2text, featureHighlights2Image, featureHighlights2ImageUrl]
  );

  const testimonialsPropsData = useMemo(
    () => ({
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
                url: getImageSource(testimonialsSectionImage, testimonialsSectionImageUrl),
                altText: "Contractors Insurance",
              }
            : undefined,
        },
      ],
    }),
    [testimonialsSectionQuote, testimonialsSectionName, testimonialsSectionPost, testimonialsSectionImage, testimonialsSectionImageUrl]
  );

  return (
    <div className="relative flex flex-col">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative min-h-[100vh] flex flex-col justify-start md:justify-center items-center py-24 md:py-0 bg-center bg-cover z-20"
      >
        <HeroSection
          heading={heading}
          subHeading={subHeading}
          redWords={redWords}
          contactRef={contactRef}
        />
        <div className="absolute bottom-0 right-0 z-30 w-full h-full">
          <Suspense fallback={null}>
            <Particles />
          </Suspense>
        </div>
      </div>

      {/* Non-critical visual elements */}
      <>
        <Bulb className="fixed left-0 -bottom-10 -translate-x-36 mix-blend-hard-light" />
        <Circles className="fixed bottom-0 right-0 translate-x-16 mix-blend-hard-light" />
      </>

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
        <FeatureHighlightSection {...featureHighlights2Data} />
        <TestimonialsSection {...testimonialsPropsData} />
      </div>
    </div>
  );
};

export default Home;

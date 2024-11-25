import dynamic from "next/dynamic";
import { Suspense, useRef, useState } from "react";
import { useEffect } from "react";

// Dynamic imports with loading fallbacks
const HeroSection = dynamic(() => import("../../components/HeroSection"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800" />,
});

const ContactSection = dynamic(() => import("../../components/ContactSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-800" />,
});

const FeaturedItemsSection = dynamic(() => import("../../components/FeaturedItemsSection"));
const FeatureHighlightSection = dynamic(() => import("../../components/FeatureHighlightSection"));
const TestimonialsSection = dynamic(() => import("../../components/TestimonialsSection"));
const ServicesSection = dynamic(() => import("../../components/ServicesSection"));
const ProjectHero = dynamic(() => import("../../components/ProjectHero"));

const Particles = dynamic(() => import("../../components/ParticlesContainer"), {
  ssr: false,
});

// Optimized data fetching
export const getServerSideProps = async () => {
  try {
    const homepageData = await fetchHomepageData();
    return {
      props: homepageData || {},
    };
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return { props: {} };
  }
};

const Home = (props) => {
  const [bgImage, setBgImage] = useState("");
  const contactRef = useRef(null);

  // Move data transformations to useMemo to prevent unnecessary recalculations
  const {
    contactFormData,
    commercialConstructionData,
    featureHighlightData,
    featureHighlights2Data,
    testimonialsPropsData
  } = useMemo(() => ({
    // ...existing data transformations...
  }), [props]);

  // Optimize background image loading
  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth > 768 ? props.bgImageDesktopUrl : props.bgImageMobileUrl);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [props.bgImageDesktopUrl, props.bgImageMobileUrl]);

  return (
    <div className="relative flex flex-col">
      <div
        style={{backgroundImage: `url(${bgImage})`}}
        className="relative min-h-[100vh] flex flex-col justify-start md:justify-center items-center py-24 md:py-0 bg-center bg-cover z-20"
      >
        <Suspense fallback={<div className="h-screen animate-pulse bg-gray-800" />}>
          <HeroSection {...props} contactRef={contactRef} />
        </Suspense>
        
        {/* Particles effect only on desktop */}
        {typeof window !== 'undefined' && window.innerWidth > 768 && (
          <Suspense fallback={null}>
            <Particles />
          </Suspense>
        )}
      </div>

      {/* Main content sections */}
      <div className="flex flex-col items-center w-full">
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800" />}>
          <div ref={contactRef}>
            <ContactSection {...contactFormData} />
          </div>
          <ServicesSection {...props} />
          <FeaturedItemsSection {...commercialConstructionData} />
          {props.youtubeVideoUrl && (
            <div className="flex justify-center mt-12 mb-12">
              <ProjectHero project={{...props}} />
            </div>
          )}
          <FeatureHighlightSection {...featureHighlightData} />
          <FeatureHighlightSection {...featureHighlights2Data} />
          <TestimonialsSection {...testimonialsPropsData} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

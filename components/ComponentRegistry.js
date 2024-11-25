import dynamic from "next/dynamic";
/**
 * The getComponent() function loads a component using dynamic import.
 *
 * Dynamic imports are useful when you wish to load a module conditionally. For example, if a home page renders the
 * "HeroSection" conditionally, then loading it with getComponent('HeroSection') will ensure that the "HeroSection"
 * is bundled only when used.
 */
export function getComponent(key) {
  return components[key];
}

/**
 * Map of dynamically imported components.
 *
 * The mapping key of a dynamically imported component is the model name describing the props of that component.
 * And the value is the component imported via Next.js dynamic import. You should use dynamic components for large
 * components or components with heavy external dependencies that are used sparingly in your website's pages.
 * To learn more about Nextjs dynamic imports visit:
 * https://nextjs.org/docs/advanced-features/dynamic-import
 *
 * Dynamic components can be selected at run-time based on the type of their content (props). This is because
 * components are mapped by models that describe their content, and content's type always matches the model name.
 * For example, a page component can call `getComponent(section.type)` function, passing it the type of section
 * data it needs to render, and get back the component that can render that type of data:
 *
 *     const Section = getComponent(section.type);
 *     return <Section {...section} />;
 */
const components = {
  CheckboxFormControl: dynamic(() => import("./CheckboxFormControl")),
  ContactSection: dynamic(() => import("./ContactSection")),
  CtaSection: dynamic(() => import("./CtaSection")),
  EmailFormControl: dynamic(() => import("./EmailFormControl")),
  FaqSection: dynamic(() => import("./FaqSection")),
  FeatureHighlightSection: dynamic(() => import("./FeatureHighlightSection")),
  FeaturedItem: dynamic(() => import("./FeaturedItem")),
  FeaturedItemsSection: dynamic(() => import("./FeaturedItemsSection")),
  // FeaturedPeopleSection: dynamic(() => import('./FeaturedPeopleSection')),
  FormBlock: dynamic(() => import("./FormBlock")),
  HeroSection: dynamic(() => import("./HeroSection")),
  ImageBlock: dynamic(() => import("./ImageBlock")),
  // JobsSection: dynamic(() => import('./JobsSection')),
  // MediaGallerySection: dynamic(() => import('./MediaGallerySection')),
  // PostFeedSection: dynamic(() => import('./PostFeedSection')),
  // FeaturedPostsSection: dynamic(() => import('./FeaturedPostsSection')),
  // RecentPostsSection: dynamic(() => import('./RecentPostsSection')),
  // QuoteSection: dynamic(() => import('./QuoteSection')),
  SelectFormControl: dynamic(() => import("./SelectFormControl")),
  TestimonialsSection: dynamic(() => import("./TestimonialsSection")),
  TextareaFormControl: dynamic(() => import("./TextareaFormControl")),
  TextFormControl: dynamic(() => import("./TextFormControl")),
  // TextSection: dynamic(() => import('./TextSection')),
  VideoBlock: dynamic(() => import("./VideoBlock")),
  // PageLayout: dynamic(() => import('./layouts/PageLayout')),
  // PostLayout: dynamic(() => import('./layouts/PostLayout')),
  // PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout')),
  // PostFeedCategoryLayout: dynamic(() =>
  //   import('./layouts/PostFeedCategoryLayout')
  // ),
};

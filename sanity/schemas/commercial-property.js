import { defineField, defineType } from "sanity";

const commercialProperty = defineType({
  name: "commercial-property",
  title: "Commercial Property",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "redWords",
      title: "Red Words",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
    }),
    defineField({
      name: "bgImageDesktop",
      title: "Background Image (Desktop)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bgImageDesktopUrl",
      title: "Background Image (Desktop) Url",
      type: "url",
    }),
    defineField({
      name: "bgImageMobile",
      title: "Background Image (Mobile)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "bgImageMobileUrl",
      title: "Background Image (Mobile) Url",
      type: "url",
    }),
    defineField({
      name: "contactFormTitle",
      title: "Contact Title",
      type: "string",
    }),
    defineField({
      name: "contactFormSubTitle",
      title: "Contact Subtitle",
      type: "string",
    }),
    defineField({
      name: "contactFormImage",
      title: "Contact Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contactFormImageUrl",
      title: "Contact Image Url",
      type: "url",
    }),

    defineField({
      name: "servicesTitle",
      title: "Services Title",
      type: "string",
    }),
    defineField({
      name: "servicesSubtitle",
      title: "Services Subtitle",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          name: "service",
          title: "Service",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  {
                    title: "Full Corporate Advertisements",
                    value: "advertisments",
                  },
                  { title: "Live Event Coverage", value: "event" },
                  { title: "Web Development", value: "web" },
                  {
                    title: "Cinematic Shorts for Social Media",
                    value: "shorts",
                  },
                  { title: "Video Remixing for Social Media", value: "remix" },
                  { title: "Ongoing Series Production", value: "series" },
                ],
              },
            },
          ],
        },
      ],
    }),

    //

    defineField({
      name: "contractorInsuranceTitle",
      title: "Contractor Insurance Title",
      type: "string",
    }),
    defineField({
      name: "contractorInsuranceSubTitle",
      title: "Contractor Insurance Subtitle",
      type: "string",
    }),

    defineField({
      name: "contractorInsuranceItems",
      title: "Contractor Insurance Items",
      type: "array",
      of: [
        {
          name: "insuranceItems",
          title: "Insurance Items",
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "subTitle", type: "string", title: "Sub Title" },
            {
              name: "shortDescription",
              type: "string",
              title: "Short Description",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "commercialConstructionTitle",
      title: "Commercial Construction Title",
      type: "string",
    }),

    defineField({
      name: "commercialConstructionSubTitle",
      title: "Commercial Construction Subtitle",
      type: "string",
    }),

    defineField({
      name: "commercialConstructionItems",
      title: "Commercial Construction Items",
      type: "array",
      of: [
        {
          name: "constructionItems",
          title: "Construction Items",
          type: "object",
          fields: [
            {
              name: "constructionTitle",
              type: "string",
              title: "Title",
            },
            {
              name: "imageConfig",
              type: "string",
              title: "Icon Config",
              options: {
                list: [
                  { title: "Faster", value: "/faster.svg" },
                  { title: "Smarter", value: "/smarter.svg" },
                  { title: "Focused", value: "/focused.svg" },
                ],
              },
            },
            {
              name: "constructionShortDescription",
              type: "string",
              title: "Short Description",
            },
          ],
        },
      ],
    }),

    //
    defineField({
      name: "youtubeVideoHeading",
      title: "Youtube Video Heading",
      type: "string",
    }),

    defineField({
      name: "youtubeVideoTitle",
      title: "Youtube Video Title",
      type: "string",
    }),

    defineField({
      name: "youtubeVideoDescription",
      title: "Youtube Video Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "youtubeVideoUrl",
      title: "Youtube Video URL",
      type: "url",
    }),

    defineField({
      name: "featureHighlightLable",
      title: "Feature High light Lable",
      type: "string",
    }),

    defineField({
      name: "featureHighlightText",
      title: "Feature High light Text",
      type: "string",
    }),

    //
    defineField({
      name: "featureHighlightImage",
      title: "Feature High light Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "featureHighlightImageUrl",
      title: "Feature High light Image Url",
      type: "url",
    }),

    defineField({
      name: "featureHighlights2title",
      title: "Feature Highlights2 Title",
      type: "string",
    }),

    defineField({
      name: "featureHighlights2text",
      title: "Feature Highlights2 Text",
      type: "string",
    }),

    //
    defineField({
      name: "featureHighlights2Image",
      title: "Feature Highlights2 Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "featureHighlights2ImageUrl",
      title: "Feature Highlights2 Image Url",
      type: "url",
    }),

    defineField({
      name: "testimonialsSectionName",
      title: "Testimonials Name",
      type: "string",
    }),

    defineField({
      name: "testimonialsSectionPost",
      title: "Testimonials Post",
      type: "string",
    }),

    defineField({
      name: "testimonialsSectionQuote",
      title: "Testimonials Quote",
      type: "string",
    }),

    //
    defineField({
      name: "testimonialsSectionImage",
      title: "Testimonials Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "testimonialsSectionImageUrl",
      title: "Testimonials Section Image Url",
      type: "url",
    }),
  ],
});

export default commercialProperty;

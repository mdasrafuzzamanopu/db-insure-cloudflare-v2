import { defineField, defineType } from "sanity";

const ThankYouPage = defineType({
  name: "thankyoupage",
  title: "Thank You page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "massage",
      title: "Thank you Message",
      type: "string",
    }),
    defineField({
      name: "thankbgImage",
      title: "Thank you Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "thankbgImageUrl",
      title: "Thank you Image Url",
      type: "url",
    }),
  ],
});

export default ThankYouPage;

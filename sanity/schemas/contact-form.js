import { defineField, defineType } from "sanity";

const contactForm = defineType({
  name: "contact",
  title: "Contacts",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required().error("Please enter your name."),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
      validation: (Rule) =>
        Rule.required().email().error("Please enter a valid email address."),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      readOnly: true,
      validation: (Rule) => Rule.required().error("Please enter a message."),
    }),
    defineField({
      name: "note",
      title: "Note",
      type: "text",
    }),
  ],
});

export default contactForm;

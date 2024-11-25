export const testimonialsProps = {
  type: "TestimonialsSection",
  colors: "colors-j",
  variant: "variant-a",
  title: "",
  subtitle: "",
  testimonials: [
    {
      quote: `<p>"Consulted our operation from blueprints to building. I have never
        received a more comprehensive service!"</p>`,
      name: "Amy Rigatoni",
      title: "Safety Officer at Heisgold Builders",
      image: {
        type: "ImageBlock",
        url: "/dianne-ameter.jpg",
        altText: "Contractors Insurance",
        elementId: "Contractors Insurance",
      },
      elementId: "Contractors Insurance",
      styles: {
        name: {
          colors: "text-purple-500",
        },
        title: {
          colors: "text-purple-300",
        },
      },
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

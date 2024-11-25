export const featureHighlightsProps = {
  type: "FeatureHighlightSection",
  colors: "colors-h",
  text: `<p>We are a team of experts who are veterans of the construction and manufacturing industries</p>`,
  badge: {
    type: "Badge",
    label: "Different Than Other Contractor's Insurance Companies",
    styles: {
      self: {
        textAlign: "left",
      },
    },
  },
  actions: [
    {
      type: "Button",
      label: "Get Started",
      url: "/signup",
      style: "primary",
      altText: "Contractors Insurance",
      elementId: "Contractors Insurance",
    },
    {
      type: "Button",
      label: "Call 713-589-4072",
      altText: "Contractors Insurance",
      url: "tel:713-589-4072",
      showIcon: true,
      icon: "send",
      iconPosition: "right",
      style: "secondary",
      elementId: "Contractors Insurance",
    },
  ],
  media: {
    type: "ImageBlock",
    url: "/Construction artistic.png",
    altText: "Contractors Insurance",
    elementId: "Contractors Insurance",
  },
  styles: {
    self: {
      height: "auto",
      width: "wide",
      margin: ["mb-24", "mx-2"],
      padding: ["px-16", "py-16"],
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: "x-large",
    },
    title: {
      textAlign: "left",
    },
    subtitle: {
      textAlign: "left",
    },
    text: {
      textAlign: "left",
    },
    actions: {
      justifyContent: "flex-start",
    },
  },
  backgroundSize: "inset",
  elementId: "Contractors Insurance",
};
export const featureHighlights2Props = {
  type: "FeatureHighlightSection",
  colors: "colors-h",
  title: "30 minute turn around on Certificates!",
  text: `<p>With Our Digital System Certificates can be Created Instantly!</p>`,
  actions: [
    {
      type: "Button",
      label: "Get Started",
      url: "/signup",
      style: "primary",
      altText: "Contractors Insurance",
      elementId: "Contractors Insurance",
    },
    {
      type: "Button",
      label: "Call 713-589-4072",
      altText: "Contractors Insurance",
      url: "tel:713-589-4072",
      showIcon: true,
      icon: "send",
      iconPosition: "right",
      style: "secondary",
      elementId: "Contractors Insurance",
    },
  ],
  media: {
    type: "ImageBlock",
    url: "/hero-1.png",
    altText: "Contractors Insurance",
    elementId: "Contractors Insurance",
  },
  styles: {
    self: {
      height: "auto",
      width: "wide",
      margin: ["mx-4"],
      padding: ["pt-36", "pb-6", "pl-4", "pr-4"],
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      zIndex: "auto",
    },
    title: {
      textAlign: "left",
    },
    subtitle: {
      textAlign: "left",
    },
    text: {
      textAlign: "left",
    },
    actions: {
      justifyContent: "flex-start",
    },
  },
  elementId: "Contractors Insurance 2",
};

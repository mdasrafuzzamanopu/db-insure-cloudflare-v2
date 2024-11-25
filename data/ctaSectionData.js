export const CtaSectionData = {
  type: "CtaSection",
  elementId: "Contractors Insurance",
  colors: "colors-h",
  backgroundSize: "full",
  title:
    "Get State & Company Approved Contractor Insurance In Under 5 Minutes!",
  text: "### ***Limited Low Price Discounts Starting at $15/Month***",
  actions: [
    {
      type: "Button",
      label: "Get My Quote Now",
      url: "/signup",
      style: "primary",
      showIcon: false,
      iconPosition: "right",
      icon: "arrowRightCircle",
      altText: "Contractors Insurance",
      elementId: "Contractors Insurance",
    },
    {
      type: "Button",
      label: "Click to Call (713) -589-4072",
      showIcon: false,
      icon: "send",
      url: "tel:713-589-4072",
      style: "primary",
      iconPosition: "right",
      altText: "Contractors Insurance",
      elementId: "Contractors Insurances",
    },
  ],
  backgroundImage: {
    type: "ImageBlock",
    url: "/images/My project-1 (32).png",
    altText: "Contractors Insurance",
    caption: "Caption of the image",
    elementId: "",
    styles: {
      self: {
        opacity: 100,
      },
    },
  },
  styles: {
    self: {
      height: "auto",
      width: "narrow",
      margin: ["mt-0", "mb-0", "ml-0", "mr-0"],
      padding: ["pt-20", "pb-64", "pl-4", "pr-4"],
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "col",
    },
    title: {
      textAlign: "left",
      fontWeight: 700,
    },
    text: {
      textAlign: "left",
    },
    actions: {
      justifyContent: "flex-start",
    },
  },
};

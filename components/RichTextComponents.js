export const RichTextComponents = {
  types: {},
  list: {
    bullet: ({ children }) => <ul className="list-disc">{children}</ul>,
    number: ({ children }) => <ul className="list-decimal">{children}</ul>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  block: {
    h1: ({ children }) => <h1 className="h1">{children}</h1>,
    h2: ({ children }) => <h2 className="h2">{children}</h2>,
    h3: ({ children }) => <h3 className="h3">{children}</h3>,
    h4: ({ children }) => <h4 className="h4">{children}</h4>,
    h5: ({ children }) => <h5 className="h5">{children}</h5>,
    h6: ({ children }) => <h6 className="h6">{children}</h6>,
    p: ({ children }) => <p className="">{children}</p>,
    normal: ({ children }) => <p className="">{children}</p>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    customHeading: ({ children }) => (
      <h2 className="text-lg text-purple-700">{children}</h2>
    ),
  },
};

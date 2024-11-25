import NextLink from "next/link";

export default function Link({ children, href, ...other }) {
  // Pass any internal link to Next.js Link, for anything else, use <a> tag
  const internal = /^\/(?!\/)/.test(href);
  if (internal) {
    return (
      <NextLink href={href}>
        <div {...other}>{children}</div>
      </NextLink>
    );
  }

  return (
    <a href={href} {...other}>
      {children}
    </a>
  );
}

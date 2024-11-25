import Markdown from "markdown-to-jsx";

import { cn } from "../utils/utils";
import Action from "./Action";
import ImageBlock from "./ImageBlock";
import Link from "./Link";
import Social from "./Social";

export default function Footer(props) {
  const colors = props.colors || "colors-a";
  const footerStyles = props.styles?.self || {};
  const footerWidth = footerStyles.width || "narrow";
  const primaryLinks = props.primaryLinks || [];
  const socialLinks = props.socialLinks || [];
  const legalLinks = props.legalLinks || [];
  return (
    <footer
      className={cn(
        "sb-component sb-component-footer",
        colors,
        footerStyles.padding || "py-16 px-4"
      )}
      data-sb-field-path={`${props.annotationPrefix}:footer`}
    >
      <div className={cn("mx-auto", mapMaxWidthStyles(footerWidth))}>
        {(props.logo || props.title || props.text) && (
          <div className="mb-12">
            <Link
              href="/"
              className="sb-footer-logo flex items-center"
              data-sb-field-path=".title#span[1] .logo#img[1]"
            >
              {props.logo && (
                <div className="h-12 flex items-center mr-2">
                  <ImageBlock
                    {...props.logo}
                    className={cn("", { "mr-2": props.isTitleVisible })}
                    height={50}
                    width={12}
                  />
                </div>
              )}
              {props.title && (
                <span className="text-2xl tracking-wide">{props.title}</span>
              )}
            </Link>
            {props.text && (
              <Markdown
                options={{ forceBlock: true, forceWrapper: true }}
                className={cn("sb-markdown", "max-w-xl", {
                  "mt-8": props.title || props.logo,
                })}
                data-sb-field-path=".text"
              >
                {props.text}
              </Markdown>
            )}
          </div>
        )}
        {(primaryLinks.length > 0 ||
          socialLinks.length > 0 ||
          props.contacts) && (
          <div className="sm:flex sm:justify-between sm:items-end">
            {primaryLinks.length > 0 && (
              <div className="mb-6">
                <ul
                  className="flex flex-col items-start mb-6 space-y-6 text-lg"
                  data-sb-field-path=".primaryLinks"
                >
                  {primaryLinks.map((link, index) => (
                    <li key={index}>
                      <Action {...link} data-sb-field-path={`.${index}`} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(socialLinks.length > 0 || props.contacts) && (
              <div className="mb-6">
                {socialLinks.length > 0 && (
                  <ul
                    className="flex items-center mb-6 space-x-10"
                    data-sb-field-path=".socialLinks"
                  >
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <Social {...link} data-sb-field-path={`.${index}`} />
                      </li>
                    ))}
                  </ul>
                )}
                {props.contacts && <Contacts {...props.contacts} />}
              </div>
            )}
          </div>
        )}
        <div className="sb-divider" />
        <div className="flex flex-col-reverse justify-between pt-6 lg:flex-row">
          {props.copyrightText && (
            <Markdown
              options={{ forceInline: true, forceWrapper: true, wrapper: "p" }}
              className={cn("sb-markdown")}
              data-sb-field-path=".copyrightText"
            >
              {props.copyrightText}
            </Markdown>
          )}
          {legalLinks.length > 0 && (
            <ul
              className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
              data-sb-field-path=".legalLinks"
            >
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Action {...link} data-sb-field-path={`.${index}`} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}

function Contacts(props) {
  return (
    <div className="mb-6 space-y-4 text-lg" data-sb-field-path=".contacts">
      {props.phoneNumber && (
        <p>
          <a
            href={`tel:${props.phoneNumber}`}
            aria-label={props.phoneAltText}
            title={props.phoneAltText}
            data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title"
          >
            {props.phoneNumber}
          </a>
        </p>
      )}
      {props.email && (
        <p>
          <a
            href={`mailto:${props.email}`}
            aria-label={props.emailAltText}
            title={props.emailAltText}
            data-sb-field-path=".email .email#@href .emailAltText#@title"
          >
            {props.email}
          </a>
        </p>
      )}
      {props.address && (
        <p>
          <a
            href={`https://www.google.com/maps/search/${props.address}`}
            aria-label={props.addressAltText}
            title={props.addressAltText}
            target="_blank"
            rel="noopener noreferrer"
            data-sb-field-path=".address .address#@href .addressAltText#@title"
          >
            {props.address}
          </a>
        </p>
      )}
    </div>
  );
}

function mapMaxWidthStyles(width) {
  switch (width) {
    case "narrow":
      return "max-w-screen-xl";
    case "wide":
      return "max-w-screen-2xl";
    case "full":
      return "max-w-full";
  }
  return null;
}

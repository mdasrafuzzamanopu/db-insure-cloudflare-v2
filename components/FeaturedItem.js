import Markdown from "markdown-to-jsx";
import { mapStylesToClassNames as mapStyles } from "../utils/MapStylesToClassNames";
import { cn, getMarkdownFromString } from "../utils/utils";
import Action from "./Action";
import ImageBlock from "./ImageBlock";

export default function FeaturedItem(props) {
  const cssId = props.elementId || null;
  const styles = props.styles || {};
  const itemBorderWidth = styles.self?.borderWidth
    ? styles.self?.borderWidth
    : 0;
  return (
    <article
      id={cssId}
      className={cn(
        "sb-component sb-component-block sb-component-item ",
        props.enableHover ? "sb-component-item-hover" : null,
        styles.self?.padding,
        styles.self?.borderColor,
        styles.self?.borderStyle
          ? mapStyles({ borderStyle: styles.self?.borderStyle })
          : "border-none",
        styles.self?.borderRadius
          ? mapStyles({ borderRadius: styles.self?.borderRadius })
          : null,
        styles.self?.textAlign
          ? mapStyles({ textAlign: styles.self?.textAlign })
          : null
      )}
      style={{
        borderWidth: itemBorderWidth ? `${itemBorderWidth}px` : undefined,
      }}
      data-sb-field-path={props["data-sb-field-path"]}
    >
      {props.featuredImage && (
        <div
          className="mb-6 flex justify-center"
          data-sb-field-path=".featuredImage"
        >
          <div className="h-12 w-12">
            <ImageBlock
              {...props.featuredImage}
              className="inline-block"
              height={50}
              width={50}
            />
          </div>
        </div>
      )}
      {props.title && (
        <h3
          className={cn(
            styles.title ? mapStyles(styles.title) : null,
            "font-semibold underline text-3xl tracking-tighter"
          )}
          data-sb-field-path=".title"
        >
          {props.title}
        </h3>
      )}
      {props.subtitle && (
        <p
          className={cn(
            "text-lg",
            styles.subtitle ? mapStyles(styles.subtitle) : null,
            { "mt-1": props.title }
          )}
          data-sb-field-path=".subtitle"
        >
          {props.subtitle}
        </p>
      )}
      {props.text && (
        <Markdown
          options={{ forceBlock: true, forceWrapper: true }}
          className={cn("sb-markdown", {
            "mt-4": props.title || props.subtitle,
          })}
          data-sb-field-path=".text"
        >
          {props.text}
        </Markdown>
      )}
      {itemActions(props)}
    </article>
  );
}

function itemActions(props) {
  const actions = props.actions || [];
  if (actions.length === 0) {
    return null;
  }
  const styles = props.styles || {};
  return (
    <div
      className={cn("overflow-x-hidden", {
        "mt-6": props.title || props.subtitle || props.text,
      })}
    >
      <div
        className={cn("flex flex-wrap items-center -mx-2", {
          "justify-center": styles.self?.textAlign === "center",
          "justify-end": styles.self?.textAlign === "right",
        })}
        data-sb-field-path=".actions"
      >
        {actions.map((action, index) => (
          <Action
            key={index}
            {...action}
            className="mb-3 mx-2 lg:whitespace-nowrap"
            data-sb-field-path={`.${index}`}
          />
        ))}
      </div>
    </div>
  );
}

import { getDataAttrs } from "../utils/GetDataAtrrs";
import { mapStylesToClassNames as mapStyles } from "../utils/MapStylesToClassNames";
import { cn, renderText } from "../utils/utils";
import Action from "./Action";
import Badge from "./Badge";
import { getComponent } from "./ComponentRegistry";

export default function FeatureHighlightSection(props) {
  const cssId = props.elementId || null;
  const colors = props.colors || "colors-a";
  const bgSize = props.backgroundSize || "full";
  const sectionStyles = props.styles?.self || {};
  const sectionWidth = sectionStyles.width || "wide";
  const sectionHeight = sectionStyles.height || "auto";
  const sectionJustifyContent = sectionStyles.justifyContent || "center";
  const sectionFlexDirection = sectionStyles.flexDirection || "row";
  const sectionAlignItems = sectionStyles.alignItems || "center";
  const zIndex = sectionStyles.zIndex || "";

  return (
    <div
      id={cssId}
      {...getDataAttrs(props)}
      className={cn(
        "sb-component sb-component-section sb-component-feature-highlight-section",
        bgSize === "inset" ? "flex" : null,
        bgSize === "inset"
          ? mapStyles({ justifyContent: sectionJustifyContent })
          : null,
        sectionStyles.margin
      )}
    >
      <div
        className={cn(
          colors,
          "flex flex-col justify-center relative",
          bgSize === "inset" ? "w-full" : null,
          bgSize === "inset" ? mapMaxWidthStyles(sectionWidth) : null,
          zIndex === "auto" ? "" : "z-20",
          mapMinHeightStyles(sectionHeight),
          sectionStyles.padding || "py-12 px-4",
          sectionStyles.borderColor,
          sectionStyles.borderStyle
            ? mapStyles({ borderStyle: sectionStyles.borderStyle })
            : "border-none",
          sectionStyles.borderRadius
            ? mapStyles({ borderRadius: sectionStyles.borderRadius })
            : null,
          sectionStyles.boxShadow
            ? mapStyles({ boxShadow: sectionStyles.boxShadow })
            : null
        )}
        style={{
          borderWidth: sectionStyles.borderWidth
            ? `${sectionStyles.borderWidth}px`
            : null,
        }}
      >
        <div
          className={cn(
            "relative w-full",
            bgSize === "full" ? "flex" : null,
            bgSize === "full"
              ? mapStyles({ justifyContent: sectionJustifyContent })
              : null
          )}
        >
          <div
            className={cn(
              "w-full",
              bgSize === "full" ? mapMaxWidthStyles(sectionWidth) : null
            )}
          >
            <div
              className={cn(
                "flex space-y-8",
                mapFlexDirectionStyles(sectionFlexDirection),
                mapStyles({ alignItems: sectionAlignItems }),
                {
                  "space-y-reverse":
                    sectionFlexDirection === "col-reverse" ||
                    sectionFlexDirection === "row-reverse",
                  "lg:space-y-0":
                    sectionFlexDirection === "row" ||
                    sectionFlexDirection === "row-reverse",
                }
              )}
            >
              <div className="z-20 flex-1 w-full">
                <div
                  className={cn({
                    "lg:pr-1/4": props.media && sectionFlexDirection === "row",
                    "lg:pl-1/4":
                      props.media && sectionFlexDirection === "row-reverse",
                  })}
                >
                  {featureHighlightBody(props)}
                  {featureHighlightActions(props)}
                </div>
              </div>
              {props.media && (
                <div className="z-20 flex-1 w-full">
                  {featureHighlightMedia(props.media)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function featureHighlightMedia(media) {
  const mediaType = media.type;
  if (!mediaType) {
    throw new Error(`hero section media does not have the 'type' property`);
  }
  const Media = getComponent(mediaType);
  if (!Media) {
    throw new Error(
      `no component matching the hero section media type: ${mediaType}`
    );
  }
  return <Media {...media} data-sb-field-path=".media" />;
}

function featureHighlightBody(props) {
  const styles = props.styles || {};
  return (
    <>
      {props.badge && <Badge {...props.badge} data-sb-field-path=".badge" />}
      {props.title && (
        <h2
          className={cn(styles.title ? mapStyles(styles.title) : null, {
            "mt-4": props.badge?.label,
          })}
          data-sb-field-path=".title"
        >
          {props.title}
        </h2>
      )}
      {props.subtitle && (
        <p
          className={cn(
            "text-xl sm:text-2xl",
            styles.subtitle ? mapStyles(styles.subtitle) : null,
            { "mt-4": props.title }
          )}
          data-sb-field-path=".subtitle"
        >
          {props.subtitle}
        </p>
      )}
      {props.text && (
        <p
          options={{ forceBlock: true, forceWrapper: true }}
          className={cn(
            "sb-markdown sm:text-lg text-gray-300",
            styles.text ? mapStyles(styles.text) : null,
            { "mt-6": props.title || props.subtitle }
          )}
          data-sb-field-path=".text"
          dangerouslySetInnerHTML={{
            __html: renderText(props.text, "{{STATE_NAME}}"),
          }}
        ></p>
      )}
    </>
  );
}

function featureHighlightActions(props) {
  const actions = props.actions || [];
  if (actions.length === 0) {
    return null;
  }
  const styles = props.styles || {};
  return (
    <div
      className={cn("overflow-x-hidden", {
        "mt-8": props.title || props.subtitle || props.text || props.badge,
      })}
    >
      <div
        className={cn(
          "flex flex-wrap items-center -mx-2",
          styles.actions ? mapStyles(styles.actions) : null
        )}
        data-sb-field-path=".actions"
      >
        {actions.map((action, index) => (
          <Action
            key={index}
            {...action}
            className="mx-2 mb-3 lg:whitespace-nowrap"
            data-sb-field-path={`.${index}`}
          />
        ))}
      </div>
    </div>
  );
}

function mapMinHeightStyles(height) {
  switch (height) {
    case "screen":
      return "min-h-screen";
  }
  return null;
}

function mapMaxWidthStyles(width) {
  switch (width) {
    case "narrow":
      return "max-w-screen-md";
    case "wide":
      return "max-w-screen-xl";
    case "full":
      return "max-w-full";
  }
  return null;
}

function mapFlexDirectionStyles(flexDirection) {
  switch (flexDirection) {
    case "row":
      return ["flex-col", "lg:flex-row"];
    case "row-reverse":
      return ["flex-col-reverse", "lg:flex-row-reverse"];
    case "col":
      return ["flex-col"];
    case "col-reverse":
      return ["flex-col-reverse"];
  }
  return null;
}

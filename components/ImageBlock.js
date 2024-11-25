import Image from "next/image";
import { cn, sanitizeString } from "../utils/utils";

export default function ImageBlock(props) {
  const { url, altText } = props;
  if (!url) {
    return null;
  }
  const cssClasses = props.className || null;
  const cssId = props.elementId || null;
  const styles = props.styles?.self || {};
  const imageOpacity =
    styles.opacity || styles.opacity === 0 ? styles.opacity : 100;
  const annotationPrefix = props["data-sb-field-path"] || "";
  const annotations = [
    `${annotationPrefix}`,
    `${annotationPrefix}.url#@src`,
    `${annotationPrefix}.altText#@alt`,
    `${annotationPrefix}.elementId#@id`,
  ];
  const height = props.height || 475;
  const width = props.width || 700;

  return (
    <Image
      id={cssId}
      className={cn(
        "sb-component sb-component-block sb-component-image-block",
        cssClasses
      )}
      style={{ opacity: imageOpacity * 0.01 }}
      data-sb-field-path={annotations.join(" ").trim()}
      src={url}
      alt={sanitizeString(altText) || ""}
      width={width}
      height={height}
    />
  );
}

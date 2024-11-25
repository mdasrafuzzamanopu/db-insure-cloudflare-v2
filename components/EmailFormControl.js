import { cn } from "../utils/utils";

export default function EmailFormControl(props) {
  const labelId = `${props.name}-label`;
  const attr = {};

  if (props.label) {
    attr["aria-labelledby"] = labelId;
  }
  if (props.isRequired) {
    attr.required = true;
  }
  return (
    <div className={cn("sb-form-control", props.className)}>
      {props.label && (
        <label
          id={labelId}
          className={cn("sb-label", { "sr-only": props.hideLabel })}
          htmlFor={props.name}
        >
          {props.label}
        </label>
      )}
      <input
        id={props.name}
        className="sb-input"
        type="email"
        name={props.name}
        {...(props.placeholder ? { placeholder: props.placeholder } : null)}
        {...attr}
      />
    </div>
  );
}

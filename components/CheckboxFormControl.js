import { cn } from "../utils/utils";

export default function CheckboxFormControl(props) {
  const labelId = `${props.name}-label`;
  const attr = {};

  if (props.label) {
    attr["aria-labelledby"] = labelId;
  }
  if (props.isRequired) {
    attr.required = true;
  }

  return (
    <div className={cn("sb-form-control flex items-center", props.className)}>
      <input
        id={props.name}
        className="sb-checkbox"
        type="checkbox"
        name={props.name}
        {...attr}
      />
      {props.label && (
        <label id={labelId} className="sb-label" htmlFor={props.name}>
          {props.label}
        </label>
      )}
    </div>
  );
}

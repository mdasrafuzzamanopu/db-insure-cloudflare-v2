import { cn } from "../utils/utils";

export default function SelectFormControl(props) {
  const labelId = `${props.name}-label`;
  const options = props.options || [];
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
      <select id={props.name} className="sb-select" name={props.name} {...attr}>
        {props.defaultValue && <option value="">{props.defaultValue}</option>}
        {options.length > 0 &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
}

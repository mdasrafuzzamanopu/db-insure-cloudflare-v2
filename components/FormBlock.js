import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { mapStylesToClassNames as mapStyles } from "../utils/MapStylesToClassNames";
import { cn } from "../utils/utils";

export default function FormBlock(props) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const formHandler = (data, url) => {
    return axios({
      method: "post",
      url,
      data,
    });
  };

  const handleSubmit = (event, formAction) => {
    event.preventDefault();
    const hiddenField = event.target["zc_gad"];

    if (hiddenField.value) {
      throw new Error("Form submission failed");
    }

    const data = new FormData(formRef.current);
    const value = Object.fromEntries(data.entries());
    delete value["zc_gad"];

    setSubmitted(false);
    setError(false);

    formHandler(value, formAction)
      .then(() => {
        setSubmitted(true);
        window.location.href = "/thank-you";
        formRef.current.reset();
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    if (!submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const {
    fields = [],
    elementId,
    variant = "variant-a",
    action,
    destination,
    submitLabel,
    className,
    styles = {},
    "data-sb-field-path": annotation,
  } = props;

  if (fields.length === 0) {
    return null;
  }

  const formHoneypotName = `${elementId}-bot-field`;

  return (
    <form
      className={cn(
        "sb-component sb-component-block sb-component-form-block",
        className
      )}
      name={elementId}
      id={elementId}
      onSubmit={(e) => handleSubmit(e, action)}
      data-netlify="true"
      ref={formRef}
      data-netlify-honeypot={formHoneypotName}
      data-sb-field-path={annotation}
    >
      <div
        className={cn("w-full", "flex", "flex-col", {
          "sm:flex-row sm:items-end": variant === "variant-b",
        })}
      >
        <div
          className={cn(
            "grid",
            "gap-y-4",
            "sm:grid-cols-2",
            "sm:gap-x-4",
            { "sm:flex-grow": variant === "variant-b" },
            "text-left"
          )}
          data-sb-field-path=".fields"
        >
          <input type="hidden" name="form-name" value={elementId} />
          <input type="hidden" name="form-destination" value={destination} />
          {fields.map((field, index) => {
            const fieldType = field.type;
            if (!fieldType) {
              throw new Error(`form field does not have the 'type' property`);
            }
            const FormControl = getComponent(fieldType);
            if (!FormControl) {
              throw new Error(
                `no component matching the form field type: ${fieldType}`
              );
            }
            return (
              <FormControl
                key={index}
                {...field}
                data-sb-field-path={`.${index}`}
              />
            );
          })}
        </div>
        <div
          className={cn(
            variant === "variant-a" ? "mt-8" : "mt-4 sm:mt-0 sm:ml-4",
            styles.submitLabel?.textAlign
              ? mapStyles({ textAlign: styles.submitLabel?.textAlign })
              : null
          )}
        >
          <button
            type="submit"
            className=" transition duration-150 ease-in-out bg-[#125b9a] border-2 border-[#125b9a] rounded-none shadow-md cursor-pointer hover:bg-[#18446a] hover:border-[#18446a] text-white sb-component sb-component-block sb-component-button sb-component-button-primary"
          >
            {submitLabel}
          </button>
          {submitted && (
            <span className="ml-8">Thank you, your message was sent.</span>
          )}
          {error && (
            <span className="ml-8 text-info">
              Something went wrong, please try again.
            </span>
          )}
        </div>
      </div>
      <input type="hidden" id="zc_gad" name="zc_gad" value="" />
    </form>
  );
}

const components = {
  EmailFormControl: dynamic(() => import("./EmailFormControl")),
  CheckboxFormControl: dynamic(() => import("./CheckboxFormControl")),
  TextFormControl: dynamic(() => import("./TextFormControl")),
  SelectFormControl: dynamic(() => import("./SelectFormControl")),
};

const getComponent = (type) => {
  return components[type] || null;
};

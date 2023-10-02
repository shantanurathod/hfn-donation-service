import { useField } from "formik";
import { FieldHookConfig } from "formik/dist/Field";


interface OtherProps {
  label: string;
}

export default function InputBox(props: OtherProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props);
  const failure = meta.touched && meta.error

  // console.log(props.name, "-->", field.value)
  return (
    <div className="mt-2 w-full">
      <label
        className={`block text-sm text-gray-800 ${failure ? "text-red-600" : null}`}
        htmlFor={props.id || props.name}
      >
        {failure ? props.label + ": " + meta.error : props.label}
      </label>
      <input
        className={`w-full ${props.label === "" || props.label === "Address" ? "px-3 py-2" : "px-5 py-1"} text-gray-700 bg-gray-200 rounded focus:outline focus:outline-blue-700 focus:outline-offset-2 focus:outline-2 ${failure ? "focus:outline-red-600 text-red-700": null}`}
        {...field}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

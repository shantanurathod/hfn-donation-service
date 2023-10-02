import {FieldHookConfig, useField } from "formik";

interface OtherProps{
    label: string;
}
export default function Checkbox(props: OtherProps & FieldHookConfig<string>) {

  const [field] = useField(props)  

  return (
    <div className="flex items-center mt-2 mb-4">
      <input      
        className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
        type="checkbox"
        {...field}
      />
      <label className="ml-2 text-sm font-medium text-gray-900" htmlFor={props.id || props.name} >
        {props.label}
      </label>
    </div>
  );
}

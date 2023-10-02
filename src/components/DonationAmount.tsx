import { RadioGroup } from "@headlessui/react";
import { FieldHookConfig, useField } from "formik";
import { ListType } from "./currencyList";
import { useEffect } from "react";

interface OtherProps {
  label: string;
  currency: ListType;
}

export default function DonationAmount(
  props: OtherProps & FieldHookConfig<string>
) {
  // const [selected, setSelected] = useState(amountList[1]);
  const [field] = useField(props);
  // console.log("selected-->", selected);
  // console.log('props.list-->', props.list)
  // console.log('props.currency-->', props.currency)

  useEffect(()=>
  {
    // console.log('props.currency changed-->', props.currency)

    const event = {
      target: {
        name: props.name,
        value: props.currency.amounts[1],
      },
    };
    // console.log('event', event)
    field.onChange(event);
  }, [props.currency])

  // console.log('field.value-nonevent', field.value)
  return (
    <div className="mx-auto w-full">
      <RadioGroup
        value={field.value}
        onChange={(e) => {
          const event = {
            target: {
              name: props.name,
              value: e,
            },
          };
          // console.log('event', event)
          field.onChange(event);
        }}
      >
        {/* {() => console.log("field.value", field.value)} */}
        <RadioGroup.Label className="text-gray-800 font-bold text-4xl my-4">
          {props.label}
        </RadioGroup.Label>
        <div className="flex my-3">
          {props.currency.amounts.map((amt, amtIdx) => (
            <RadioGroup.Option
              key={amtIdx}
              value={amt}
              className={({
                checked,
              }) => `text-center py-2.5 px-5 mr-2 w-full mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:text-blue-700
              cursor-pointer ${
                checked
                  ? "bg-sky-500 text-blue-700 hover:text-blue-700 focus:text-blue-700"
                  : null
              }`}
            >
              {`${props.currency.symbol}${amt.toLocaleString(`en-${props.currency.code.substring(0,props.currency.code.length-1)}`)}`}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

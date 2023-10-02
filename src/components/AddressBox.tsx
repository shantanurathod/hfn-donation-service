import InputBox from "./InputBox";

export default function AddressBox() {
  return (
    <>
      <InputBox
        label="Address"
        name="address"
        type="text"
        placeholder="Street"
      />
      <InputBox label="" name="city" type="text" placeholder="City" />
      <InputBox label="" name="state" type="text" placeholder="State" />
      <div className="flex space-x-1 w-full">
        <InputBox className="w-1/2" label="" name="country" type="text" placeholder="Country" />
        <InputBox className="w-1/2" label="" name="postalCode" type="text" placeholder="Zip" />
      </div>
    </>
  );
}

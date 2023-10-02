"use client";

import CampaignWidget from "@/components/CampaignWidget";
import DonationAmount from "@/components/DonationAmount";
import { useSearchParams } from "next/navigation";
import InputBox from "@/components/InputBox";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import AddressBox from "@/components/AddressBox";
import Checkbox from "@/components/Checkbox";
import DropDown from "@/components/DropDown";
import { ListType, currencyList } from "@/components/currencyList";

function validation(values)
{

}
export default function Page() {
  // const queryParams = useSearchParams();

  

  return (
    <div className="lg:grid lg:grid-cols-3 bg-white h-full">
      {/* Form */}
      <div className="leading-loose lg:col-span-2 mx-10">
        <div className="m-auto p-4 max-w-3xl">
          <Formik
            initialValues={{
              currency: currencyList[0],
              amount: currencyList[0].amounts[1],
              customAmount: 0,
              name: "",
              anonymous: false,
              email: "",
              mobileNumber: "",
              address: "",
              city: "",
              state: "",
              postalCode: "",
              country: "",
              citizenship: "",
              memberID: "",
              taxID: "",
            }}
            validationSchema={Yup.object({
              currency: Yup.object(),
              customAmount: Yup.number()
              .test({
                name: 'custom-check',
                test: value => {
                  if (value! > 10) {
                    return throw(crea)
                }
                else {
                    return false;
                }
                }
              })
              // .when(['currency', 'customAmount'], {
              //   is: (currency: ListType, customAmount: number) => currency.min 
              // })
              // .matches(/^[0-9]+$/, "Must be only digits")
              .min(10000, `${Yup.ref('amount')} Invalid value`),
              // .max(10, "amount exceed the line"),
              // .when()
              name: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              mobileNumber: Yup.string()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, "Invalid mobile number")
                .max(10, "Invalid mobile number")
                .required("Required"),
              address: Yup.string()
                .min(10, "Must be 10 characters or more")
                .max(100, "Must be 100 characters or less")
                .required("Required"),
              city: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
              state: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
              postalCode: Yup.string()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(6, "Invalide postal code")
                .max(6, "Invalid postal code")
                .required("Required"),
              country: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
              citizenship: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
              memberID: Yup.string(),
              taxID: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              // console.log("values-->", values.currency);
              setSubmitting(false);
            }}
          >
            {(values: FormikProps<any>) => {
              // console.log('values-->', values.values.currency)
              return (
                <Form className="">
                  <DonationAmount
                    label="Donation amount"
                    currency={values.values.currency}
                    name="amount"
                  />
                  <DropDown list={currencyList} name="currency" />
                  <InputBox label="Other"
                  name="customAmount"
                  type="number"
                  placeholder="10 or more"/>
                  <p className="text-gray-800 font-bold text-3xl my-4">
                    Your Details
                  </p>
                  <InputBox
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                  />
                  <Checkbox
                    label="Make my donation anonymous"
                    name="anonymous"
                  />
                  <InputBox
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Your email"
                  />
                  <InputBox
                    label="Mobile"
                    name="mobileNumber"
                    type="text"
                    placeholder="Your mobile number"
                  />
                  <AddressBox />
                  <InputBox
                    label="Citizenship"
                    name="citizenship"
                    type="text"
                    placeholder="Your country citizenship"
                  />
                  <InputBox
                    label="Member ID"
                    name="memberId"
                    type="text"
                    placeholder="Your Member ID"
                  />
                  <InputBox
                    label="Tax ID"
                    name="taxID"
                    type="text"
                    placeholder="Your Tax ID"
                  />
                  <div className="mt-4">
                    <button
                      className={`px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded`}
                      type="button"
                      onClick={(e) => {
                        }}
                    >
                      {`$${3}`}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      {/* Card */}
      <CampaignWidget />
    </div>
  );
}

function loadScript(src: string) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  
  export async function displayRazorpay() {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
  
    // const order_url = "http://localhost:3000/api/razorpay"
    // const response = await fetch(order_url, {mode: 'no-cors'})
    // const orderResponse = await response.json()
    // console.log('orderResponse-->', orderResponse)
    const body = {
      userProfile: {
        userId: "",
        firstName: "Shantanu",
        lastName: "Rathod",
        emailAddress: "contactshantanurathod@gmail.com",
        phoneNumber: "+917477060347",
        addressLine1: "D. D. Nagar",
        addressLine2: "",
        city: "Gwalior",
        state: "Madhya Pradesh",
        postalCode: "474005",
        country: "India",
        memberId: "INSRAF580",
        taxId: "AAAAA1111A",
        citizenshipCountry: "India",
        role: null,
      },
      lineItems: [
        {
          id: "",
          donationItem: {
            id: "37",
            name: "",
            description: "",
            region: "",
            currency: "",
            billingAccountName: "",
            isActive: false,
          },
          currency: "INR",
          amount: "10",
          recurringStartDate: "",
          recurringFrequency: "",
        },
      ],
      currency: null,
      amount: null,
      description: null,
      clientSuccessRedirectUrl: "http://localhost:3000/success",
      clientFailureRedirectUrl: "http://localhost:3000/failure",
      clientId: "me",
      extras: {
        projects: [""],
        identityType: "Pancard",
        identityNumber: "ECNPR8771J",
        packageDetail: [],
      },
    };
  
    // console.log('calling api')
    const response = await fetch(
      "https://donation-service.qa.heartfulnessinstitute.in/donations/donate",
      { method: "POST", body: JSON.stringify(body) }
    );
    const jsonRes = await response.json();
  
    console.log(
      "paymentGatewayRequestParamMap-->",
      jsonRes.paymentGatewayRequestParamMap
    );
  
    const options = {
      key: jsonRes.paymentGatewayRequestParamMap?.client_id,
      currency: jsonRes.paymentGatewayRequestParamMap?.currency,
      amount: jsonRes.paymentGatewayRequestParamMap?.amount,
      order_id: jsonRes.paymentGatewayRequestParamMap?.id,
      name: "shan shan",
      description: `This Pass is valid for shan`,
      image: "/next.svg",
      callback_url: "https://payments-service.qa.heartfulnessinstitute.in/open/razorpay/redirectAck",
      // handler: function (response: {
      //   razorpay_payment_id: string;
      //   razorpay_order_id: string;
      //   razorpay_signature: string;
      // }) {
      //   alert(response.razorpay_payment_id);
      //   alert(response.razorpay_order_id);
      //   alert(response.razorpay_signature);
      // },
      notes: {
        origin: jsonRes.paymentGatewayRequestParamMap?.origin, // Mandatory Field - Give the value of "origin" provided in paymentGatewayRequestParamMap. It will be payments_service by default.
      },
    };
  
    //     paymentObject.on('payment.failed', function (response: NextResponse){
      //       alert(response.error.code);
      //       alert(response.error.description);
      //       alert(response.error.source);
      //       alert(response.error.step);
      //       alert(response.error.reason);
      //       alert(response.error.metadata.order_id);
      //       alert(response.error.metadata.payment_id);
      // });
      
      try {
      const paymentObject = new (window as any).Razorpay(options);
      // console.log(paymentObject.onerror)
      paymentObject.open(() => console.log("called the OPEN"));
    } catch (error) {
      console.log("razorpayWidgetError-->", error)
    }
  }
  
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_iu2U1w6fshCuhNbFkE6A4Oqp00VavTsbo6";

  const onToken = token => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="CRWN Ltd"
      currency="AUD"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

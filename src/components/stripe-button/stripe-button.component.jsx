import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("Payment was successfull");
  };
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JnlXoSBFdY6v6RZMVrZbzYIiHGGDnGG0LrLxiHLeLyZPgvqHXZYpqbmECxqjkHZH2YktTXsWyi5sk3NLGI50sm700v72ymJhJ";
  return (
    <div>
      <StripeCheckout
        stripeKey={publishableKey}
        name="Crown Clothing Pvt Ltd."
        panelLabel="Pay Now"
        //billingAddress
        //shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total price ${price}`}
        amount={priceForStripe}
        token={onToken}
      />
    </div>
  );
};

export default StripeCheckoutButton;

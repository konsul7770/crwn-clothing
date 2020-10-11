import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_WPstjetHE0akdoeOzWXbViNV00nwYb0tUn";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total $${price}`}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;
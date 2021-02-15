import { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import Row from "./prebuilt/Row";
import BillingDetailsFields from "./prebuilt/BillingDetailsFields";
import SubmitButton from "./prebuilt/SubmitButton";
import CheckoutError from "./prebuilt/CheckoutError";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe()
  const elements = useElements()

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      }
    };

    setProcessingTo(true)

    const {data: clientSecret } = await axios.post('/api/payment_intents', {
      amount: price * 100
    })

    const cardElement = elements.getElement(CardElement)

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails
    })
  
    const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id
    })

    onSuccessfulCheckout()
    
  

    //TIP Stipe, amount is in the lowest denomination
    // $1 = 100 cents
    //create a payment intent on the server
    //client_secret of that payment intent

    //create a payment method
    //need stripe.js
    //need reference to the cardElement

    //confirm the card payment
    //payment method id
    //client_secret
  };

  //stripe.com/docs/js

  const cardElementOptions = {
    //a way to inject styles into that iframe
    style: {
      base: {
        fontSize: '16px',
        color: '#fff',
        '::placeholder': {
          color: '#87bbfd'
        }

      },
      invalid: {
        color: '#FFC7EE',
        iconColor: '#FFC7EE'
      }
    },
    hidePostalCode: true
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <BillingDetailsFields />
      </Row>
      <Row>
        <CardElementContainer>
          <CardElement options = {cardElementOptions}/>
        </CardElementContainer>
      </Row>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <Row>
        <SubmitButton disabled={isProcessing}>
          {isProcessing ? "Processing..." : `Pay $${price}`}
        </SubmitButton>
      </Row>
    </form>
  );
};

export default CheckoutForm;
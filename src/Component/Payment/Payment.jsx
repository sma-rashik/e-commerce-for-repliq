import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {
  useEffect(() => {
    document.title = "CricDemy | Payment";
  }, []);
  return (
    <div>
      <h2>Teka Teka</h2>

      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;

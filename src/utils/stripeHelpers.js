// src/utils/stripeHelpers.js

import axios from "axios";

/**
 * Creates a PaymentIntent on backend
 */
export const createPaymentIntent = async (axiosSecure, amount) => {
  const res = await axiosSecure.post("/create-payment-intent", { amount });
  return res.data.clientSecret;
};

/**
 * Confirms Stripe payment
 */
export const confirmStripePayment = async (stripe, elements, clientSecret) => {
  const card = elements.getElement("card");
  if (!card) throw new Error("Card element not found");

  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: { card },
  });

  return result;
};

/**
 * After successful Stripe payment → store in backend
 */
export const savePaymentRecord = async (axiosSecure, payment) => {
  return await axiosSecure.post("/payments", payment);
};

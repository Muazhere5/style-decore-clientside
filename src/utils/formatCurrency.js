// src/utils/formatCurrency.js

const formatCurrency = (amount) => {
  if (!amount) return "৳0";

  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
  }).format(amount);
};

export default formatCurrency;

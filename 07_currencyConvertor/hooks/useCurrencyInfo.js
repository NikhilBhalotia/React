import { useEffect, useState } from "react";

// https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
// https://api.frankfurter.app/latest?from=USD

// https://open.er-api.com/v6/latest/PKR

function useCurrencyInfo(Currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${Currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates));
    
  }, [Currency]);

  return data
}

export default useCurrencyInfo

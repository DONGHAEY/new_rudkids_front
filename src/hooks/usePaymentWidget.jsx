import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { useEffect, useRef, useState } from "react";

export const usePaymentWidget = ({ widgetClientKey, customerKey }) => {
  const [paymentWidget, setPaymentWidget] = useState(undefined);

  useEffect(() => {
    (async () => {
      console.log(widgetClientKey, ",", customerKey);
      if (!widgetClientKey || !customerKey) return;
      try {
        const loadedWidget = await loadPaymentWidget(
          widgetClientKey,
          customerKey
        );
        setPaymentWidget(loadedWidget);
      } catch (error) {
        console.error("Error fetching payment widget:", error);
      }
    })();
  }, [widgetClientKey, customerKey]);

  return [paymentWidget];
};

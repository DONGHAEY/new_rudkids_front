import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { useEffect, useRef, useState } from "react";

export const usePaymentWidget = ({ widgetClientKey, customerKey }) => {
  const [paymentWidget, setPaymentWidget] = useState(undefined);

  useEffect(() => {
    (async () => {
      if (!widgetClientKey || !customerKey) return;
      try {
        const loadedWidget = await loadPaymentWidget(
          widgetClientKey,
          customerKey
        );
        setPaymentWidget(loadedWidget);
      } catch (error) {}
    })();
  }, [widgetClientKey, customerKey]);

  return [paymentWidget];
};

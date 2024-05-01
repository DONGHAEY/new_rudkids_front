import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { useEffect, useState } from "react";

export const useFetchPaymentWidget = ({ widgetClientKey, customerKey }) => {
  const [paymentWidget, setPaymentWidget] = useState(null);

  useEffect(() => {
    const fetchPaymentWidget = async () => {
      try {
        const loadedWidget = await loadPaymentWidget(
          widgetClientKey,
          customerKey
        );
        setPaymentWidget(loadedWidget);
      } catch (error) {
        console.error("Error fetching payment widget:", error);
      }
    };
    fetchPaymentWidget();
  }, [widgetClientKey, customerKey]);

  return [paymentWidget];
};

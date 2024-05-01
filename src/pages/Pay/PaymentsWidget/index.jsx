import { useEffect } from "react";

function PaymentsWidget({ paymentWidget, totalPrice }) {
  useEffect(() => {
    if (!paymentWidget) return null;
    paymentWidget.renderPaymentMethods(
      "#payment-widget",
      { value: totalPrice },
      { variantKey: "DEFAULT" }
    );
    paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" });
    // paymentMethodsWidgetRef.current = paymentMethodsWidget;
  }, [paymentWidget, totalPrice]);

  //   useEffect(() => {
  //     if (!paymentWidget) return null;
  //     // const paymentMethodsWidget = paymentMethodsWidgetRef.current;
  //     // if (!paymentMethodsWidget) return;
  //     // paymentMethodsWidget.updateAmount(totalPrice);
  //   }, [paymentWidget, totalPrice]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div id="payment-widget" />
      <div id="agreement" />
    </div>
  );
}

export default PaymentsWidget;

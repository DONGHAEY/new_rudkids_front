import { FaqUI } from "./styles";
import FaqBox from "./FaqBox";

const Faq = () => {
  const faqContents = [
    {
      ask: "Order",
      answer: `상품주문은 다음단계로 이루어집니다.\n
- Step1: 상품검색\n
- Step2: 장바구니에 담기\n
- Step3: 주문서 작성\n
- Step4: 결제방법선택 및 결제\n
- Step5: 주문 성공 화면 (주문번호)`,
    },
    {
      ask: "Delivery",
      answer: `- CJ대한통운\n
- AM 11시 이전 구매 시 당일 출고 (영업일 기준)\n
- 배송 기간: 결제 후 영업일 기준 1–3주 소요\n
- 배송 비용: 1원
`,
    },
    {
      ask: "Exchange & Return Procedure",
      answer: `1. 교환 반품 접수\n
- 사이트 우측 상단 MY PAGE > Orders 에서 교환/반품 접수\n
2. 상품 발송\n
- 교환/반품 접수 시 택배(CJ대한통운) 접수 진행\n
- CJ대한통운 1588-1255 또는 앱을 통해 반품 예약\n
3. 교환 반품 비용 안내\n
- 교환 반품 비용 결제 : 차감 후 환불 / 계좌 입금\n
단순 변심으로 인한 교환 반품의 경우 고객님 부담입니다.\n
제품 불량 또는 오배송에 의한 왕복 배송비는 무상 처리됩니다.\n
- CJ대한통운 이용(착불 접수)\n
전체 환불 및 교환 : 왕복 택배비 6,000원 / 부분 환불 3,000원\n
착불 이용 시 추가 금액이 발생한 경우 추가 차감될 수 있습니다.\n
- 타 택배사 이용(선불 접수)\n
전체 환불 및 교환 : 최초 발송 택배비 3,000원 차감 환불\n
반품지 주소 : ???
`,
    },
  ];

  return (
    <FaqUI>
      {/*  */}
      {faqContents?.map((faqContent) => {
        return <FaqBox ask={faqContent.ask} answer={faqContent.answer} />;
      })}

      {/*  */}
    </FaqUI>
  );
};

export default Faq;

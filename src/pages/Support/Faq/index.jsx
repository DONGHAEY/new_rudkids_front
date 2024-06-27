import { Icon } from "@iconify/react/dist/iconify.js";
import { FaqBoxUI, FaqUI } from "./styles";

const Faq = () => {
  const faqContents = [
    {
      ask: "배송은 얼마나 걸리나요?",
      icon: "teenyicons:down-solid",
    },
  ];

  return (
    <FaqUI>
      {/*  */}
      <FaqBoxUI>
        <p>배송은 얼마나 걸리나요?</p>
        <Icon icon="teenyicons:down-solid" />
      </FaqBoxUI>
      {/*  */}
    </FaqUI>
  );
};

export default Faq;

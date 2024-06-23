import { Suspense } from "react";
import LandingLoader from "./Loader";
import { PageUI, FooterImgUI } from "./styles";
import footer from "./assets/footer.webp";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import Page1 from "./Page1";
import Page2 from "./Page2";
import EatingKid from "./EatingKid";

const LandingPage = () => {
  useBodyBackground("rgba(255, 212, 0, 1)");
  return (
    <Suspense fallback={<LandingLoader />}>
      <LandingLoader />
      <PageUI>
        <Page1 />
        <EatingKid />
        <Page2 />
        <FooterImgUI src={footer} />
      </PageUI>
    </Suspense>
  );
};

export default LandingPage;

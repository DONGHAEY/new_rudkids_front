import Header from "../../shared/Header";
import { FlexColUI, PageContentUI, PageUI } from "./styles";
import Scene from "./Scene";

const AboutPage = () => {
  return (
    <PageUI>
      <Scene />
      <Header />
      <PageContentUI>
        <FlexColUI>
          <h1>About</h1>
          <h1>What is Rudkids</h1>
          <h2>Rudkids Is Club</h2>
          <h2>For World Makers</h2>
          <br />
          <div>
            <p>This text can be changed</p>
            <p>This text can be changed</p>
            <p>This text can be changed</p>
            <p>This text can be changed</p>
            <p>This text can be changed</p>
          </div>
        </FlexColUI>
      </PageContentUI>
    </PageUI>
  );
};

export default AboutPage;

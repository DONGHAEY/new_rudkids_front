import { useState } from "react";
import ModelDragger from "../../../shared_components/ModelDragger";
import { TShirtIntroduceUI } from "./styles";
import ModelSelect from "../../../shared_components/ModelSelect";
import signatureGradient from "../../../global/signature-gradients";

const TShirtIntroduce = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const models = [
    {
      name: "QuestionCard",
      description: "",
      imageUrl: "/Images/logo.svg",
      modelUrl: "/Models/question_card.glb",
    },
    {
      name: "QuestionCard",
      description: "",
      imageUrl: "/Images/logo.svg",
      modelUrl: "/Models/question_card.glb",
    },
    {
      name: "QuestionCard",
      description: "",
      imageUrl: "/Images/logo.svg",
      modelUrl: "/Models/question_card.glb",
    },
  ];

  return (
    <TShirtIntroduceUI>
      <ModelDragger
        modelName={"3D"}
        modelUrls={models?.map((_) => _.modelUrl)}
        modelIdx={selectedIdx}
        setModelIdx={setSelectedIdx}
        background={signatureGradient[selectedIdx % signatureGradient.length]}
      />
      <ModelSelect
        models={models}
        setSelectedIdx={setSelectedIdx}
        selectedIdx={selectedIdx}
      />
    </TShirtIntroduceUI>
  );
};

export default TShirtIntroduce;

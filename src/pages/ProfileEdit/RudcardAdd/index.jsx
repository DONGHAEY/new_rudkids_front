import {
  InputListUI,
  PageDescriptionUI,
  PageUI,
  SaveBtnSectionUI,
  SaveBtnUI,
} from "./styles";
import CardTemplate from "./RudcardTemplate";
import { useForm } from "react-hook-form";
import NameInput from "./NameInput";
import BirthInput from "./BirthInput";
import DescriptionInput from "./DescriptionInput";
import useUserQuery from "../../../queries/user/useUserQuery";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";
import { createFileName } from "use-react-screenshot";
import useEditCardImgUrlMutation from "../../../mutations/user/useEditCardImgUrlMutation";
import Loader from "../../../shared_components/Loader";
import { useNavigate } from "react-router-dom";

const RudcardAdd = () => {
  const cardRef = useRef();

  const navigate = useNavigate();
  const { data: userData } = useUserQuery();

  const editCardImgUrl = useEditCardImgUrlMutation();

  const { register, watch } = useForm({
    defaultValues: {
      name: userData?.nickname,
      description: userData?.introduce,
    },
  });

  const download = (image, { name = "img", extension = "svg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = async (e) => {
    e.preventDefault();
    const dataURI = await htmlToImage.toPng(cardRef.current);
    fetch(dataURI)
      .then((res) => res.blob())
      .then(async (blob) => {
        const formData = new FormData();
        const fileName = "file";
        const convertedFile = new File([blob], fileName, {
          type: "image/svg",
        });
        formData.append("file", convertedFile);
        await editCardImgUrl.mutateAsync(formData, {
          onSuccess: () => {
            alert("카드등록에 성공함.");
            navigate(-1);
          },
        });
      });
  };

  if (editCardImgUrl.isLoading) {
    return <Loader />;
  }

  return (
    <PageUI>
      <PageDescriptionUI>당신에 대해 알려주세요 카피라이팅</PageDescriptionUI>
      <div
        style={{
          width: "95%",
          position: "relative",
          backgroundColor: "transparent",
        }}
        ref={cardRef}
      >
        <CardTemplate
          profileImgUrl={userData?.imageUrl}
          name={watch("name")}
          birth={watch("birth")}
          description={watch("description")}
          qrImgUrl={`https://api.qrserver.com/v1/create-qr-code/?data=https://www.rud.kids/profile/${userData?.nickname}&amp;size=100x100`}
          order={333}
        />
      </div>
      <InputListUI>
        <NameInput register={register} />
        <BirthInput register={register} />
        <DescriptionInput register={register} />
      </InputListUI>
      <SaveBtnSectionUI>
        <SaveBtnUI onClick={downloadScreenshot}>만들기</SaveBtnUI>
      </SaveBtnSectionUI>
    </PageUI>
  );
};

export default RudcardAdd;

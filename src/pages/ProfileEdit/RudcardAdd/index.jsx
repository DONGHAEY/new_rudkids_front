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
import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { createFileName } from "use-react-screenshot";
import useEditCardImgUrlMutation from "../../../mutations/user/useEditCardImgUrlMutation";
import Loader from "../../../shared_components/Loader";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import WarningAlert from "./WarningAlert";

const RudcardAdd = () => {
  const cardRef = useRef();

  const navigate = useNavigate();
  const { data: userData } = useUserQuery();

  const editCardImgUrl = useEditCardImgUrlMutation();

  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      name: userData?.nickname,
      description: userData?.introduce,
      birth: {
        year: null,
        month: null,
        date: null,
      },
    },
  });

  // const download = (image, { name = "img", extension = "svg" } = {}) => {
  //   const a = document.createElement("a");
  //   a.href = image;
  //   a.download = createFileName(extension, name);
  //   a.click();
  // };

  const [isAlert, setIsAlert] = useState(false);

  const submitHandler = () => {
    setIsAlert(true);
  };

  const submit = async (data) => {
    const dataURI = await htmlToImage.toPng(cardRef.current);
    fetch(dataURI)
      .then((res) => res.blob())
      .then(async (blob) => {
        const formData = new FormData();
        const fileName = `${userData.id}-card.svg`;
        const convertedFile = new File([blob], fileName, {
          type: "image/svg",
        });
        formData.append("file", convertedFile);
        await editCardImgUrl.mutateAsync(formData, {
          onSuccess: () => {
            navigate("카드등록에 성공함.");
            navigate(-1);
          },
        });
      });
  };

  if (editCardImgUrl.isLoading) {
    return <Loader />;
  }

  return (
    <PageUI onSubmit={handleSubmit(submitHandler)}>
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
          qrImgUrl={`https://api.qrserver.com/v1/create-qr-code/?data=https://www.rud.kids/profile/${userData?.id}&amp;size=100x100`}
          order={333}
        />
      </div>
      <InputListUI>
        <NameInput register={register} />
        <BirthInput
          yearRegister={register("birth.year", {
            required: "년도 입력은 필수",
            minLength: 4,
            maxLength: 4,
          })}
          monthRegister={register("birth.month", {
            required: "달 입력은 필수",
            minLength: 2,
            maxLength: 2,
          })}
          dateRegister={register("birth.date", {
            required: "날짜 입력은 필수",
            maxLength: 2,
            minLength: 2,
          })}
        />
        <DescriptionInput register={register} />
      </InputListUI>
      <SaveBtnSectionUI>
        <SaveBtnUI type="submit">만들기</SaveBtnUI>
      </SaveBtnSectionUI>
      <Modal open={isAlert}>
        <WarningAlert
          onConfirm={() => {
            submit();
            setIsAlert(false);
          }}
          onCancel={() => {
            setIsAlert(false);
          }}
        />
      </Modal>
    </PageUI>
  );
};

export default RudcardAdd;

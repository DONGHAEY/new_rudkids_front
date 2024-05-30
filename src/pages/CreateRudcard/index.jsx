import { InputListUI, PageUI, SaveBtnSectionUI, SaveBtnUI } from "./styles";
import CardTemplate from "./RudcardTemplate";
import { useController, useForm } from "react-hook-form";
import NameInput from "./NameInput";
import BirthInput from "./BirthInput";
import DescriptionInput from "./DescriptionInput";
import useUserQuery from "../../queries/user/useUserQuery";
import { useRef, useState } from "react";
import useEditCardImgUrlMutation from "../../mutations/user/useEditCardImgUrlMutation";
import Loader from "../../shared_components/Loader";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import WarningAlert from "./WarningAlert";
import ImageInput from "./ImageInput";
import Popup from "../../shared_components/Popup";
import * as htmlToImage from "html-to-image";

const CreateRudcardPage = () => {
  const navigate = useNavigate();
  const [isAlert, setIsAlert] = useState(false);
  const { data: userData } = useUserQuery();
  const [cardFetchLoading, setCardFetchLoading] = useState(false);
  const editCardImgUrl = useEditCardImgUrlMutation();

  const cardRef = useRef();

  const { watch, handleSubmit, setValue, control } = useForm({
    defaultValues: {
      name: userData?.nickname,
      description: userData?.introduce,
      birth: {
        year: null,
        month: null,
        date: null,
      },
      profileImgUrl: userData?.imageUrl,
    },
  });

  const submitHandler = () => {
    setIsAlert(true);
  };

  const submit = async () => {
    const dataURI = await htmlToImage.toPng(cardRef.current);
    setCardFetchLoading(true);
    fetch(dataURI)
      .then((res) => res.blob())
      .then(async (blob) => {
        const formData = new FormData();
        const fileName = `card.svg`;
        const convertedFile = new File([blob], fileName, {
          type: "image/svg",
        });
        formData.append("file", convertedFile);
        await editCardImgUrl.mutateAsync(formData, {
          onSuccess: () => {
            alert("카드등록에 성공함.");
            navigate(-1);
          },
          onSettled: () => {
            setCardFetchLoading(false);
          },
        });
      });
  };

  const nameInput = useController({
    name: "name",
    control,
    rules: {
      required: "이름 입력은 필수입니다",
      minLength: {
        value: 2,
        message: "2글자 이상으로 작성해주세요",
      },
      maxLength: {
        value: 8,
        message: "8글자 아래로 작성해주세요",
      },
    },
  });

  const descriptionInput = useController({
    name: "description",
    control,
    rules: {
      required: "글 입력은 필수입니다",
      minLength: {
        value: 4,
        message: "4글자 이상으로 작성해주세요",
      },
      maxLength: {
        value: 40,
        message: "40글자 아래로 작성해주세요",
      },
    },
  });

  const birthYearInput = useController({
    name: "birth.year",
    control,
    rules: {
      required: "년도 입력은 필수입니다",
      minLength: {
        value: 4,
        message: "년도 4글자 이상",
      },
      maxLength: {
        value: 4,
        message: "년도 4글자 이하",
      },
    },
  });

  const birthMonthInput = useController({
    name: "birth.month",
    control,
    rules: {
      required: "달 입력은 필수입니다",
      minLength: {
        value: 2,
        message: "달 2글자 이상",
      },
      maxLength: {
        value: 2,
        message: "달 2글자 이하",
      },
    },
  });

  const birthDateInput = useController({
    name: "birth.date",
    control,
    rules: {
      required: "일 입력은 필수입니다",
      minLength: {
        value: 2,
        message: "일 2글자 이상",
      },
      maxLength: {
        value: 2,
        message: "일 2글자 이하",
      },
    },
  });

  if (editCardImgUrl.isLoading || cardFetchLoading) {
    return (
      <PageUI>
        <Loader />
      </PageUI>
    );
  }

  return (
    <Popup title="루키즈 카드">
      <PageUI onSubmit={handleSubmit(submitHandler)}>
        <div
          style={{
            width: "95%",
            position: "relative",
            backgroundColor: "transparent",
          }}
          ref={cardRef}
        >
          <CardTemplate
            profileImgUrl={watch("profileImgUrl")}
            name={watch("name")}
            birth={watch("birth")}
            description={watch("description")}
            qrImgUrl={`https://api.qrserver.com/v1/create-qr-code/?data=https://www.rud.kids/profile/${userData?.id}&amp;size=100x100`}
            order={333}
          />
        </div>
        <InputListUI>
          <ImageInput
            setValue={(imageUrl) => {
              setValue("profileImgUrl", imageUrl);
            }}
          />
          <NameInput {...nameInput} />
          <BirthInput
            year={birthYearInput}
            month={birthMonthInput}
            date={birthDateInput}
          />
          <DescriptionInput {...descriptionInput} />
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
    </Popup>
  );
};

export default CreateRudcardPage;

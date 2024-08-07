import { InputListUI, PageUI, SaveBtnSectionUI, SaveBtnUI } from "./styles";
import CardTemplate from "./RudcardTemplate";
import { useController, useForm } from "react-hook-form";
import NameInput from "./NameInput";
import BirthInput from "./BirthInput";
import DescriptionInput from "./DescriptionInput";
import useUserQuery from "../../queries/user/useUserQuery";
import { useState } from "react";
import useEditCardImgUrlMutation from "../../mutations/user/useEditCardImgUrlMutation";
import Loader from "../../shared_components/Loader";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import WarningAlert, { CannotAlert } from "./WarningAlert";
import ImageInput from "./ImageInput";
import Popup from "../../shared_components/Popup";

const CreateRudcardPage = () => {
  const navigate = useNavigate();
  const [isAlert, setIsAlert] = useState(false);
  const [cardCreating, setCardCreating] = useState(false);
  const [canvasRef, setCanvasRef] = useState(null);
  //
  const { data: userData } = useUserQuery();
  const editCardImgUrlMutation = useEditCardImgUrlMutation();

  const { watch, handleSubmit, setValue, control, formState } = useForm({
    defaultValues: {
      name: userData?.nickname,
      description: "",
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
    if (cardCreating) return;
    if (!canvasRef.current) return;
    setCardCreating(true);
    const dataURI = canvasRef.current.toDataURL("image/webp");
    fetch(dataURI)
      .then((res) => res.blob())
      .then(async (blob) => {
        const formData = new FormData();
        const fileName = `card.webp`;
        const convertedFile = new File([blob], fileName, {
          type: blob.type,
        });
        formData.append("file", convertedFile);
        await editCardImgUrlMutation.mutateAsync(formData, {
          onSuccess: () => {
            navigate(-1);
          },
          onSettled: () => {
            setCardCreating(false);
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
      pattern: {
        value: /^[0-9]/,
        message: "숫자로만 입력해주세요",
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
      pattern: {
        value: /^[0-9]/,
        message: "숫자로만 입력해주세요",
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
      pattern: {
        value: /^[0-9]/,
        message: "숫자로만 입력해주세요",
      },
    },
  });

  return (
    <Popup title="루키즈 카드">
      <PageUI onSubmit={handleSubmit(submitHandler)}>
        <div
          style={{
            width: "90%",
          }}
        >
          <CardTemplate
            profileImgUrl={watch("profileImgUrl")}
            name={watch("name")}
            birth={watch("birth")}
            description={watch("description")}
            qrImgUrl={`https://api.qrserver.com/v1/create-qr-code/?data=https://www.rud.kids/profile/${userData?.id}&amp;size=100x100`}
            order={userData?.firstPaidNum}
            onLoad={(cansRef) => setCanvasRef(cansRef)}
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
            errorMessage={
              formState.errors.birth?.year?.message ??
              formState.errors.birth?.month?.message ??
              formState.errors.birth?.date?.message ??
              ""
            }
          />
          <DescriptionInput {...descriptionInput} />
        </InputListUI>
        <SaveBtnSectionUI>
          <SaveBtnUI type="submit">만들기</SaveBtnUI>
        </SaveBtnSectionUI>
        <Modal open={isAlert} onClick={() => setIsAlert(false)}>
          {!userData.firstPaidNum ? (
            <CannotAlert />
          ) : (
            <WarningAlert
              onConfirm={() => {
                submit();
                setIsAlert(false);
              }}
              onCancel={() => {
                setIsAlert(false);
              }}
            />
          )}
        </Modal>
        {(editCardImgUrlMutation.isLoading || cardCreating) && (
          <Loader message="카드가 제작되는 중.." />
        )}
      </PageUI>
    </Popup>
  );
};

export default CreateRudcardPage;

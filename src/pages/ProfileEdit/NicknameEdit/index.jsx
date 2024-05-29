import { useEffect, useState } from "react";
import { InputUI, InputWrapperUI, MessageTxtUI, PageUI } from "./styles";
import { SaveBtnSectionUI, SaveBtnUI } from "../LinksEdit/styles";
import useEditNicknameMutation from "../../../mutations/user/userEditNicknameMutation";
import { usePopup } from "../../../hooks/usePopup";
import { useForm } from "react-hook-form";
import Popup from "../../../shared_components/Popup";

const NicknameEdit = ({ nickname: beforeNickname }) => {
  //
  const [, popupBack] = usePopup();
  const editNicknameMutation = useEditNicknameMutation();
  const [nickname, setNickname] = useState("");

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nickname,
    },
  });

  useEffect(() => {
    setNickname(beforeNickname);
  }, [beforeNickname]);

  const onsubmit = async (data) => {
    editNicknameMutation.mutateAsync(data["nickname"], {
      onSuccess: () => {
        popupBack();
      },
      onError: () => {
        alert("이미 사용중인것 같습니다, 다른 닉네임으로 시도하세용");
      },
    });
  };

  return (
    <Popup title="닉네임 수정">
      <PageUI onSubmit={handleSubmit(onsubmit)}>
        <InputWrapperUI>
          <InputUI
            {...register("nickname", {
              value: nickname,
              maxLength: {
                value: 8,
                message: "8글자 이하로 입력해야함",
              },
              minLength: {
                value: 2,
                message: "2글자 이상 입력해야함",
              },
            })}
            placeholder="닉네임을 입력하여 수정"
          />
        </InputWrapperUI>
        <MessageTxtUI>{errors.nickname?.message}</MessageTxtUI>
        <SaveBtnSectionUI>
          <SaveBtnUI>수정</SaveBtnUI>
        </SaveBtnSectionUI>
      </PageUI>
    </Popup>
  );
};

export default NicknameEdit;

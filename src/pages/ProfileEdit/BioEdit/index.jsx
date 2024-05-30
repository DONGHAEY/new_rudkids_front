import { useEffect, useState } from "react";
import {
  LengthTxtUI,
  PageUI,
  SaveBtnSectionUI,
  SaveBtnUI,
  TextAreaUI,
  TextAreaWrapperUI,
} from "./styles";
import useEditIntroduceMutation from "../../../mutations/user/useEditIntroduceMutation";
import { usePopup } from "../../../hooks/usePopup";
import Popup from "../../../shared_components/Popup";

const BioEdit = ({ userBio = "" }) => {
  const [_, popupBack] = usePopup();
  const maxLength = 150;
  const [bio, setBio] = useState("");

  const editIntroduceMutation = useEditIntroduceMutation();

  useEffect(() => {
    setBio(userBio);
  }, [userBio]);

  const saveBtnClickHandler = async () => {
    await editIntroduceMutation.mutateAsync(bio, {
      onSuccess: () => {
        popupBack();
      },
    });
  };

  return (
    <Popup title="Bio" description="당신에 대해 알려주세요 카피라이팅">
      <PageUI>
        <TextAreaWrapperUI>
          <TextAreaUI
            placeholder="당신이 왜 루키즈인지 적어보세요"
            value={bio}
            onChange={(e) => {
              if (maxLength - e.target?.value.length >= 0) {
                setBio(e.target.value);
              }
            }}
          />
          <LengthTxtUI>{maxLength - bio.length}</LengthTxtUI>
        </TextAreaWrapperUI>
        <SaveBtnSectionUI>
          <SaveBtnUI onClick={saveBtnClickHandler}>저장</SaveBtnUI>
        </SaveBtnSectionUI>
      </PageUI>
    </Popup>
  );
};

export default BioEdit;

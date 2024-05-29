import { MdAdd } from "react-icons/md";
import {
  AddBtnUI,
  InputTitleTxtUI,
  InputUI,
  PageUI,
  SaveBtnSectionUI,
  SaveBtnUI,
  UrlListUI,
  UrlSectionUI,
} from "./styles";
import Link from "./Link";

import useEditLinksMutation from "../../../mutations/user/useEditLinksMutation";
import { useEffect, useRef, useState } from "react";
import { usePopup } from "../../../hooks/usePopup";
import Popup from "../../../shared_components/Popup";

const LinksEdit = ({ links }) => {
  const [_, popupBack] = usePopup();
  const editLinksMutation = useEditLinksMutation();
  const linkInputRef = useRef();
  const [_links, _setLinks] = useState();

  const saveBtnClickHandler = async () => {
    await editLinksMutation.mutateAsync(_links, {
      onSuccess: () => {
        popupBack();
      },
    });
  };

  const onAddBtnClickHandler = () => {
    const targetValue = linkInputRef.current.value;
    if (!targetValue) return;
    if (_links?.find((_link) => _link === targetValue)) {
      alert("이미 등록된 링크입니다 ");
      return;
    }
    _setLinks([..._links, targetValue]);
  };

  useEffect(() => {
    _setLinks(links);
  }, [links]);

  return (
    <Popup
      title="Links"
      showHeader
      description="당신이 얼마나 멋진 사람인지 자랑해보세요 🥳"
    >
      <PageUI>
        <UrlSectionUI>
          <InputTitleTxtUI>url</InputTitleTxtUI>
          <InputUI ref={linkInputRef} />
          <AddBtnUI onClick={onAddBtnClickHandler}>
            <MdAdd />
          </AddBtnUI>
        </UrlSectionUI>
        <UrlListUI>
          {_links?.map((link_, idx) => {
            return (
              <Link
                link={link_}
                key={idx}
                isLocked={idx === 0}
                onDeleteClick={() => {
                  _setLinks(_links?.filter((_link) => _link !== link_));
                }}
              />
            );
          })}
        </UrlListUI>
        <SaveBtnSectionUI>
          <SaveBtnUI onClick={saveBtnClickHandler}>저장</SaveBtnUI>
        </SaveBtnSectionUI>
      </PageUI>
    </Popup>
  );
};

export default LinksEdit;

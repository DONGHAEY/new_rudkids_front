import { BottomBoxUI, CenterModalUI, SelectBoxListUI } from "./styles";
import SelectBox from "./SelectBox";
import ActionBar from "./ActionBar";
import { useEffect, useState } from "react";

const SelectModal = ({ open, onClose, optionGroups, onSelected }) => {
  const [focusingId, setFocusingId] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState({});

  const cartClickHandler = () => {
    onSelected(Object.values(selectedOptions).map((option) => option?.id));
    onClose();
  };

  useEffect(() => {
    setFocusingId(null);
  }, [open]);

  const btnDisabled =
    Object.keys(selectedOptions)?.length !== optionGroups?.length;

  return (
    <CenterModalUI open={open} onClose={onClose}>
      <BottomBoxUI>
        <SelectBoxListUI>
          {optionGroups?.map((optionGroup) => {
            return (
              <SelectBox
                key={optionGroup?.name}
                name={optionGroup?.name}
                options={optionGroup?.options}
                isFocus={focusingId === optionGroup?.id}
                onFocus={() => {
                  if (focusingId === optionGroup.id) {
                    setFocusingId(null);
                  } else {
                    setFocusingId(optionGroup.id);
                  }
                }}
                value={selectedOptions[optionGroup?.id]?.name}
                setValue={(option) => {
                  setSelectedOptions({
                    ...selectedOptions,
                    [optionGroup.id]: option,
                  });
                  setFocusingId(null);
                }}
              />
            );
          })}
        </SelectBoxListUI>
        <ActionBar onCartClick={cartClickHandler} disabled={btnDisabled} />
      </BottomBoxUI>
    </CenterModalUI>
  );
};

export default SelectModal;

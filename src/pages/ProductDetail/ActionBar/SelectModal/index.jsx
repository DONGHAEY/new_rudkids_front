import { BottomBoxUI, CenterModalUI, SelectBoxListUI } from "./styles";
import OptionSelect from "./OptionSelect";
import ActionBar from "./ActionBar";
import { useEffect, useState } from "react";
import QuantityController from "./QuantityController";

const SelectModal = ({
  open,
  onClose,
  optionGroups,
  onSelected,
  actionName,
}) => {
  const [focusingId, setFocusingId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});

  const actionBtnClickHandler = () => {
    onSelected(Object.values(selectedOptions), quantity);
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
              <OptionSelect
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
                    [optionGroup.id]: {
                      ...option,
                      groupName: optionGroup.name,
                    },
                  });
                  setFocusingId(null);
                }}
              />
            );
          })}
          <QuantityController quantity={quantity} setQuantity={setQuantity} />
        </SelectBoxListUI>
        <ActionBar
          actionName={actionName}
          onClick={actionBtnClickHandler}
          disabled={btnDisabled}
        />
      </BottomBoxUI>
    </CenterModalUI>
  );
};

export default SelectModal;

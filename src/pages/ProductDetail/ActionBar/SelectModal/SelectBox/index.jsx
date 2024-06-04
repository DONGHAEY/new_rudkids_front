import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ColUI,
  OptionListUI,
  OptionTxtUI,
  OptionUI,
  SelectBoxUI,
} from "./styles";
import { useState } from "react";

const SelectBox = ({
  name,
  options = [],
  value,
  setValue,
  isFocus,
  onFocus,
}) => {
  const optionClickHandler = (option) => {
    setValue(option);
  };

  return (
    <ColUI>
      {isFocus && (
        <OptionListUI>
          {options?.map((option) => {
            return (
              <OptionUI onClick={() => optionClickHandler(option)}>
                {name} : {option?.name}
              </OptionUI>
            );
          })}
        </OptionListUI>
      )}
      <SelectBoxUI onClick={onFocus}>
        <OptionTxtUI>
          {name} {value ? ": " + value : ""}
        </OptionTxtUI>
        <Icon
          fontSize="16px"
          icon={isFocus ? "ep:arrow-up-bold" : "ep:arrow-down-bold"}
        />
      </SelectBoxUI>
    </ColUI>
  );
};

export default SelectBox;

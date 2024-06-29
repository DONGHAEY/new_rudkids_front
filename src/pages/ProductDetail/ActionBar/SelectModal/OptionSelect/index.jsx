import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ColUI,
  OptionImgUI,
  OptionListUI,
  OptionTxtUI,
  OptionUI,
  SelectBoxUI,
} from "./styles";
import size1Src from "./assets/size-1.webp";
import size2Src from "./assets/size-2.webp";
import size3Src from "./assets/size-3.webp";

const OptionSelect = ({
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

  const imgObj = {
    ["Size-1"]: size1Src,
    ["Size-2"]: size2Src,
    ["Size-3"]: size3Src,
  };

  return (
    <ColUI>
      {isFocus && (
        <OptionListUI>
          {options?.map((option) => {
            const imgUrl = imgObj[`${name}-${option?.name}`];
            return (
              <OptionUI
                key={option.id}
                onClick={() => optionClickHandler(option)}
              >
                {imgUrl && <OptionImgUI src={imgUrl} />}
                <p>
                  {name} : {option?.name}
                </p>
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

export default OptionSelect;

import { useEffect } from "react";
import { ScrollUI, TypeBtnListUI, TypeButtonUI } from "./styles";

const TypeList = ({ setTypeCategory, typeCategory }) => {
  const typeCategories = ["All", "Toy", "Colthes", "Stationery"];

  useEffect(() => {
    setTypeCategory(typeCategories[0]);
  }, [setTypeCategory]);

  return (
    <ScrollUI>
      <TypeBtnListUI>
        {typeCategories?.map((typeCategory_) => (
          <TypeButtonUI
            onClick={() => setTypeCategory(typeCategory_)}
            $selected={typeCategory_ === typeCategory}
          >
            {typeCategory_}
          </TypeButtonUI>
        ))}
      </TypeBtnListUI>
    </ScrollUI>
  );
};

export default TypeList;

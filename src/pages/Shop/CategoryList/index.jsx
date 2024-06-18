import { ScrollUI, TypeBtnListUI, TypeButtonUI } from "./styles";

const CategoryList = ({ setTypeCategory, typeCategory }) => {
  //
  const typeCategories = {
    All: "" || null || undefined,
    Toy: "Toy",
    Clothes: "Clothes",
    Stationery: "Stationery",
  };

  return (
    <ScrollUI>
      <TypeBtnListUI>
        {Object.keys(typeCategories)?.map((key) => (
          <TypeButtonUI
            key={key}
            onClick={() => setTypeCategory(typeCategories[key])}
            $selected={typeCategories[key] === typeCategory}
          >
            {key}
          </TypeButtonUI>
        ))}
      </TypeBtnListUI>
    </ScrollUI>
  );
};

export default CategoryList;

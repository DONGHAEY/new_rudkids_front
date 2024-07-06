import png0 from "./assets/0.webp";
import png1 from "./assets/1.webp";
import png2 from "./assets/2.webp";
import png3 from "./assets/3.webp";
import { CategoriesUI, CategoryImgWrapperUI } from "./styles";

const Categories = () => {
  const categoryImgs = [png0, png1, png2, png3];
  return (
    <CategoriesUI>
      {categoryImgs?.map((category) => {
        return (
          <CategoryImgWrapperUI>
            <img src={category} width="100%" />
          </CategoryImgWrapperUI>
        );
      })}
    </CategoriesUI>
  );
};

export default Categories;

import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import styled from "styled-components";

export const ProductTag = ({ name, content, ...props }) => {
  const three = useThree();
  return (
    <ProductTagUI {...props} center>
      <ProductNameUI>{name}</ProductNameUI>
      <ProductContentUI>{content}</ProductContentUI>
    </ProductTagUI>
  );
};

const ProductNameUI = styled.p`
  @font-face {
    font-family: "Archivo_SemiExpanded-Bold";
    src: url("/fonts/Archivo/Archivo_SemiExpanded-Bold.ttf");
  }
  font-family: "Archivo_SemiExpanded-Bold";
  font-size: 30px;
`;

const ProductContentUI = styled.p`
  @font-face {
    font-family: "Archivo_SemiExpanded-Bold";
    src: url("/fonts/Archivo/Archivo_SemiExpanded-Bold.ttf");
  }
  font-family: "Archivo_SemiExpanded-Bold";
  font-size: 15px;
`;

const ProductTagUI = styled(Html)`
  background-color: rgba(0, 0, 0, 10%);
  border-radius: 20px;
  margin: 0;
  padding: 20px;
  white-space: nowrap;

  color: white;
`;

import { FieldNameTextUI, FieldUI } from "./styles";

const Field = ({ children, name }) => {
  return (
    <FieldUI>
      <FieldNameTextUI>{name}</FieldNameTextUI>
      {children}
    </FieldUI>
  );
};

export default Field;

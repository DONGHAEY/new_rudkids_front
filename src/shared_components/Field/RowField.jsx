import { FieldNameTextUI, RowFieldUI } from "./styles";

const RowField = ({ children, name }) => {
  return (
    <RowFieldUI>
      <FieldNameTextUI>{name}</FieldNameTextUI>
      {children}
    </RowFieldUI>
  );
};

export default RowField;

import { ColFieldUI, FieldNameTextUI } from "./styles";

const ColField = ({ children, name }) => {
  return (
    <ColFieldUI>
      <FieldNameTextUI>{name}</FieldNameTextUI>
      {children}
    </ColFieldUI>
  );
};

export default ColField;

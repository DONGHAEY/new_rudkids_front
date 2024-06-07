import { CenterUI } from "./styles";

import Header from "./Header";

export const Popup = ({
  children,
  title = "",
  description = "",
  backgroundColor = "white",
}) => {
  return (
    <CenterUI>
      <Header
        title={title}
        description={description}
        backgroundColor={backgroundColor}
      />
      {children}
    </CenterUI>
  );
};

export default Popup;

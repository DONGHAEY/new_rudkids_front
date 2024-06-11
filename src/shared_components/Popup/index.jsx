import { CenterUI, ContentsUI } from "./styles";

import Header from "./Header";

export const Popup = ({
  children,
  title = "",
  description = "",
  backgroundColor = "white",
  backLink = -1,
}) => {
  return (
    <CenterUI>
      <Header
        title={title}
        description={description}
        backgroundColor={backgroundColor}
        backLink={backLink}
      />
      <ContentsUI>{children}</ContentsUI>
    </CenterUI>
  );
};

export default Popup;

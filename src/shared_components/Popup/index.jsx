import { CenterUI } from "./styles";

import Header from "./Header";

export const Popup = ({ children, title = "", description = "" }) => {
  return (
    <CenterUI>
      <Header title={title} description={description} />
      {children}
    </CenterUI>
  );
};

export default Popup;

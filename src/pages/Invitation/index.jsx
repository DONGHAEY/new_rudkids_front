import { useParams } from "react-router-dom";

const InvitationPage = ({ routeInfo }) => {
  const params = useParams();

  const inviterUserId = params[routeInfo.paramKeys[0]];

  return <div></div>;
};

export default InvitationPage;

import { useParams } from "react-router-dom";

const InvitationPage = () => {
  const params = useParams();

  const inviterUserId = params["user_id"];

  return <div></div>;
};

export default InvitationPage;

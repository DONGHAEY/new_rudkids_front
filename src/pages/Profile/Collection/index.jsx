import { GoArrowUpRight } from "react-icons/go";
import {
  CollectionArrowUI,
  CollectionCntTxtUI,
  CollectionHeadUI,
  CollectionTitleUI,
  CollectionUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import useCollectionQuery from "../../../queries/collection/userCollectionQuery";

export const Collection = ({ userData }) => {
  const navigate = useNavigate();
  const { data: collectedProducts } = useCollectionQuery(userData?.id);

  return (
    <CollectionUI
      onClick={() => {
        navigate(`/collection/${userData?.id}`);
      }}
    >
      <CollectionArrowUI>
        <GoArrowUpRight />
      </CollectionArrowUI>
      <CollectionHeadUI>
        <CollectionTitleUI>Collection</CollectionTitleUI>
        <CollectionCntTxtUI>
          {collectedProducts?.length ?? 0}
        </CollectionCntTxtUI>
      </CollectionHeadUI>
    </CollectionUI>
  );
};

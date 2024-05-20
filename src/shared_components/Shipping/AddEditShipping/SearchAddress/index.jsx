import {
  AddressListUI,
  SearchAddressUI,
  SearchAddressWrapperUI,
  SearchSectionUI,
} from "./styles";
import ColField from "../../../Field/ColField";
import { TextInputUI } from "../styles";
import Address from "./Address";
import { useState } from "react";
import useSearchAddressQuery from "../../../../queries/shipping/useSearchAddressQuery";
const SearchAddress = ({ setAddress, address }) => {
  const [query, setSearch] = useState(address);

  const searchAddressQuery = useSearchAddressQuery(query);

  return (
    <SearchAddressWrapperUI>
      <SearchAddressUI>
        <SearchSectionUI>
          <ColField name="주소">
            <TextInputUI
              value={query}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ex) 영동대로 233, 테헤란로 22"
            />
          </ColField>
        </SearchSectionUI>
        <AddressListUI>
          {searchAddressQuery.data?.map((addressData) => {
            if (!addressData.addressElements[8]) return null;
            return (
              <Address
                onClick={() => setAddress(addressData.roadAddress)}
                address={addressData.roadAddress}
                postalCode={addressData.addressElements[8]?.shortName}
              />
            );
          })}
        </AddressListUI>
      </SearchAddressUI>
    </SearchAddressWrapperUI>
  );
};

export default SearchAddress;

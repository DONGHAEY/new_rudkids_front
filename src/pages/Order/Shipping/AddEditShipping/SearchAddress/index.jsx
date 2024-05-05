import {
  AddressListUI,
  SearchAddressUI,
  SearchAddressWrapperUI,
  SearchSectionUI,
} from "./styles";
import ColField from "../../../../../shared/Field/ColField";
import { useSearchAddressQuery } from "../../../../../queries/shipping";
import { TextInputUI } from "../styles";
import Address from "./Address";
import { useState } from "react";
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
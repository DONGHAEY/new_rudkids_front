import {
  AddressTextUI,
  AddressUI,
  PostalCodeTextUI,
  RowUI,
  StreetNameSignUI,
} from "./styles";

const Address = ({ onClick, postalCode, address }) => {
  return (
    <AddressUI onClick={onClick}>
      <PostalCodeTextUI>{postalCode}</PostalCodeTextUI>
      <RowUI>
        <StreetNameSignUI>도로명</StreetNameSignUI>
        <AddressTextUI>{address}</AddressTextUI>
      </RowUI>
    </AddressUI>
  );
};

export default Address;

import { Controller, useForm } from "react-hook-form";
import {
  AddEditShippingUI,
  AddEditShippingWrapperUI,
  TextInputUI,
} from "./styles";
import BottomButton from "./BottomButton";
import ColField from "../../../../shared/Field/ColField";
import RowField from "../../../../shared/Field/RowField";
import Popup from "../../../../shared/Popup";
import SearchAddress from "./SearchAddress";
import { useState } from "react";
import {
  useAddShippingMutation,
  useEditShippingMutation,
} from "../../../../queries/shipping";

const AddEditShipping = ({ shippingData = null, onAction }) => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: shippingData,
  });

  const addShippingMutation = useAddShippingMutation();
  const editShippingMutation = useEditShippingMutation(shippingData?.id);

  const submitHandler = async (data) => {
    if (shippingData?.id) {
      await editShippingMutation.mutateAsync(data, {
        onSettled: () => {
          onAction();
        },
      });
    } else {
      await addShippingMutation.mutateAsync(data, {
        onSettled: () => {
          onAction();
        },
      });
    }
  };

  const [popupIsOpen, setPopupIsOpen] = useState({
    searchAddress: false,
  });

  const popupSetIsOpen = (key, value) => {
    setPopupIsOpen({
      ...popupIsOpen,
      [key]: value,
    });
  };

  return (
    <AddEditShippingWrapperUI>
      <AddEditShippingUI>
        <ColField name="배송지 이름">
          <TextInputUI
            {...register("name", {
              required: true,
            })}
            placeholder="배송지 이름"
          />
        </ColField>
        <ColField name="받는 분">
          <TextInputUI
            {...register("recieverName", {
              required: true,
            })}
            placeholder="받는 분"
          />
        </ColField>
        <ColField name="배송지">
          <TextInputUI
            ref={
              register("address", {
                required: true,
              }).ref
            }
            value={watch("address")}
            onClick={() =>
              setPopupIsOpen({
                ...popupIsOpen,
                searchAddress: true,
              })
            }
            placeholder="건물, 지번 또는 도로명 검색"
          />
          <TextInputUI
            {...register("detailAddress", {
              required: false,
            })}
            placeholder="상세주소"
          />
        </ColField>
        <ColField name="휴대전화번호">
          <TextInputUI
            {...register("recieverPhoneNumber", {
              required: "필수",
              minLength: {
                value: 3,
                message: "전화번호 7자 이상입력해야해요!",
              },
              onChange: (e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .replace(
                    /(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g,
                    "$1-$2-$3"
                  );
              },
            })}
            placeholder="'-'없이 숫자만 입력하세요"
          />
        </ColField>
        {/* 기본배송지로 설정 컬럼 필요 */}
        <RowField name="기본배송지로 설정">
          <input {...register("isDefault")} type="checkbox" />
        </RowField>
        <Popup
          isOpen={popupIsOpen.searchAddress}
          setIsOpen={(isOpen) => popupSetIsOpen("searchAddress", isOpen)}
          popupName="🔎 주소 검색"
        >
          <SearchAddress
            address={watch("address")}
            setAddress={(address) => {
              if (!address) return;
              popupSetIsOpen("searchAddress", false);
              setValue("address", address);
            }}
          />
        </Popup>
      </AddEditShippingUI>
      <BottomButton
        disable={addShippingMutation.isLoading}
        onClick={handleSubmit(submitHandler)}
      >
        Done
      </BottomButton>
    </AddEditShippingWrapperUI>
  );
};

export default AddEditShipping;

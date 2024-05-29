import { useForm } from "react-hook-form";
import { AddEditShippingUI, PageUI, TextInputUI, SelectUI } from "./styles";
import BottomButton from "./BottomButton";
import ColField from "../../Field/ColField";
import RowField from "../../Field/RowField";
import PopupRoute from "../../PopupRoute";
import Popup from "../../Popup";
import SearchAddress from "./SearchAddress";
import { usePopup } from "../../../hooks/usePopup";
import useAddShippingMutation from "../../../mutations/shipping/useAddShippingMutation";
import useEditShippingMutation from "../../../mutations/shipping/useEditShippingMutation";
import { useMemo } from "react";

const requesetMemoContents = [
  "문앞에 놓아주세요",
  "경비실 앞에 놓아주세요",
  "그렇게해주세요",
];

const AddEditShipping = ({ shippingData = null, setShippingData }) => {
  const [popupNavigate, popupBack] = usePopup();

  const { register, handleSubmit, watch, setValue, formState } = useForm({
    defaultValues: shippingData,
    mode: "onChange",
  });

  const addShippingMutation = useAddShippingMutation();
  const editShippingMutation = useEditShippingMutation(shippingData?.id);

  const submitHandler = async (data) => {
    if (shippingData?.id) {
      await editShippingMutation.mutateAsync(data, {
        onSuccess: () => {
          setShippingData(data);
        },
      });
    } else {
      await addShippingMutation.mutateAsync(data, {
        onSuccess: (addedShipping) => {
          setShippingData(addedShipping);
        },
      });
    }
  };

  const canSubmit = useMemo(() => {
    console.log(formState.errors, "_-");
    return Object.keys(formState.errors)?.length === 0;
  }, [formState]);

  const searchAddressPopupName = `search-address-${shippingData?.name ?? ""}`;

  return (
    <Popup title={`📮 Shipping ${shippingData === null ? "Add" : "Edit"}`}>
      <PageUI>
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
              onClick={() => popupNavigate(searchAddressPopupName)}
              placeholder="건물, 지번 또는 도로명 검색"
            />
            <PopupRoute name={searchAddressPopupName}>
              <SearchAddress
                address={watch("address")}
                setAddress={(address) => {
                  if (!address) return;
                  popupBack();
                  setValue("address", address);
                }}
              />
            </PopupRoute>
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
          <ColField name="배송시 요청사항">
            <SelectUI
              {...register("requestMemo", {
                required: false,
              })}
            >
              <option key={-1} value={""}>
                배송메모를 선택해주세요
              </option>
              {requesetMemoContents?.map((requestMemo, idx) => (
                <option key={idx} value={requestMemo}>
                  {requestMemo}
                </option>
              ))}
            </SelectUI>
          </ColField>
          {/* 기본배송지로 설정 컬럼 필요 */}
          <RowField name="기본배송지로 설정">
            <input {...register("isDefault")} type="checkbox" />
          </RowField>
        </AddEditShippingUI>
        <BottomButton
          disable={addShippingMutation.isLoading || !canSubmit}
          onClick={handleSubmit(submitHandler)}
        >
          Done
        </BottomButton>
      </PageUI>
    </Popup>
  );
};

export default AddEditShipping;

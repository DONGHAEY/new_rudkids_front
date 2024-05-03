import { useForm } from "react-hook-form";
import Field from "./Field";
import {
  AddEditShippingUI,
  AddEditShippingWrapperUI,
  TextInputUI,
} from "./styles";
import BottomButton from "./BottomButton";

const AddEditShipping = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <AddEditShippingWrapperUI>
        <AddEditShippingUI>
          {/* <DescriptionTextUI>📮 Shipping Adress</DescriptionTextUI> */}
          <Field name="배송지 이름">
            <TextInputUI
              {...register("name", {
                required: true,
              })}
              placeholder="배송지 이름"
            />
          </Field>
          <Field name="받는 분">
            <TextInputUI
              {...register("recieverName", {
                required: true,
              })}
              placeholder="받는 분"
            />
          </Field>
          <Field name="배송지">
            <TextInputUI
              {...register("address", {
                required: true,
              })}
              value={""}
              placeholder="건물, 지번 또는 도로명 검색"
            />
            <TextInputUI
              {...register("detailAdress", {
                required: false,
              })}
              placeholder="상세주소"
            />
          </Field>
          <Field name="휴대전화번호">
            <TextInputUI
              {...register("recieverPhoneNumber", {
                required: true,
              })}
              placeholder="'-'없이 숫자만 입력하세요"
            />
          </Field>
          {/* 기본배송지로 설정 컬럼 필요 */}
        </AddEditShippingUI>
        <BottomButton onClick={handleSubmit(submitHandler)}>Done</BottomButton>
      </AddEditShippingWrapperUI>
    </>
  );
};

export default AddEditShipping;

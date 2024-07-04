import { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  FormUI,
  LabelUI,
  RatioLabelUI,
  SectionUI,
  SelectUI,
  SubmitBtnUI,
  TextAreaUI,
  TxtInputUI,
} from "./styles";
import useUploadFileMutation from "../../../mutations/file/useUploadFile";
import usecreateQnaMutation from "../../../mutations/support/createQnaMutation";
import { useAlert } from "../../../hooks/useRudAlert";

const QnaForm = () => {
  const alert = useAlert();
  const fileRef = useRef();
  const uploadFileMutation = useUploadFileMutation();
  const createQnaMutation = usecreateQnaMutation();

  const {
    formState: {},
    register,
    handleSubmit,
  } = useForm();

  const submitHandler = async (data) => {
    if (data.agreement !== "동의함") {
      await alert(
        "개인정보 수집 및 이용 동의를 해주시면 처리해드리겠습니다 :)"
      );
      return;
    }
    const attachment = fileRef.current.files[0];
    if (attachment) {
      const attachmentUrl = await uploadFileMutation.mutateAsync(
        attachment,
        `/supports/attachments/${new Date().toISOString()}`
      );
      data.attachment = attachmentUrl;
    }

    createQnaMutation.mutateAsync(data, {
      onSuccess: async () => {
        await alert("제출 처리되었습니다!");
        window.location.reload();
      },
    });
  };

  return (
    <FormUI onSubmit={handleSubmit(submitHandler)}>
      <SectionUI>
        <LabelUI htmlFor=".name">Name</LabelUI>
        <TxtInputUI
          className=".name"
          {...register("writer.name", {
            required: true,
          })}
        />
      </SectionUI>
      <SectionUI>
        <LabelUI htmlFor=".response_method">Response Method</LabelUI>
        <SelectUI
          className=".response_method"
          {...register("responseMethod", {
            required: true,
          })}
        >
          <option defaultChecked value={"Email"}>
            Email
          </option>
          <option value={"Mobile"}>Mobile</option>
          <option value={"Email+Mobile"}>Email+Mobile</option>
        </SelectUI>
      </SectionUI>
      <SectionUI>
        <LabelUI htmlFor=".email">Email</LabelUI>
        <TxtInputUI
          type="email"
          className="email"
          {...register("writer.email", {
            required: true,
          })}
        />
      </SectionUI>
      <SectionUI>
        <LabelUI htmlFor=".mobile">Mobile</LabelUI>
        <TxtInputUI
          type="mobile"
          className="mobile"
          {...register("writer.mobile", {
            required: true,
          })}
        />
      </SectionUI>
      <SectionUI>
        <LabelUI htmlFor=".type">Type</LabelUI>
        <SelectUI
          className="type"
          {...register("type", {
            required: true,
          })}
        >
          <option defaultChecked value="상품문의">
            상품문의
          </option>
          <option value="상품문의">결제문의</option>
          <option value="배송문의">배송문의</option>
          <option value="교환/반품 문의">교환/반품 문의</option>
          <option value="취소/환불 문의">취소 환불 문의</option>
        </SelectUI>
      </SectionUI>
      <SectionUI>
        <LabelUI htmlFor=".subject">Subject</LabelUI>
        <TxtInputUI
          className="subject"
          {...register("subject", {
            required: true,
          })}
        />
      </SectionUI>
      <SectionUI>
        <LabelUI htmlFor=".message">Message</LabelUI>
        <TextAreaUI
          className="message"
          {...register("message", {
            required: true,
          })}
        />
      </SectionUI>
      <SectionUI>
        <LabelUI htmlFor=".attachment">attachment</LabelUI>
        <input
          ref={fileRef}
          type="file"
          multiple={false}
          className="attachment"
          accept="image/*"
        />
      </SectionUI>
      <div>
        <div
          style={{
            paddingBlock: "10px",
            fontFamily: "Pretendard-Medium",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          개인정보 수집 및 이용동의
          <TextAreaUI
            value={`■ 개인정보의 수집·이용 목적 서비스 제공 및 계약의 이행, 구매 및 대금결제, 물품배송 또는 청구지 발송, 회원관리 등을 위한 목적\n■수집하려는 개인정보의 항목 이름, 주소, 연락처, 이메일 등 \n■ 개인정보의 보유 및 이용 기간 회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외없이 해당정보를 파기합니다.`}
          />
        </div>
        <RatioLabelUI htmlFor=".agreement">동의</RatioLabelUI>
        <input
          className="agreement"
          type="radio"
          {...register("agreement")}
          value="동의함"
        />
        <RatioLabelUI htmlFor=".noAgreement">동의안함</RatioLabelUI>
        <input
          className="noAgreement"
          type="radio"
          {...register("agreement")}
          value="동의안함"
        />
      </div>
      <SubmitBtnUI
        type="submit"
        disabled={createQnaMutation.isLoading || uploadFileMutation.isLoading}
      >
        submit
      </SubmitBtnUI>
    </FormUI>
  );
};

export default QnaForm;

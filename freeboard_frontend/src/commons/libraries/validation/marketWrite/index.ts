import * as yup from "yup";

export const MarketWriteSchema = yup.object({
  name: yup.string().required("상품명을 입력해 주세요."),
  remarks: yup.string(),
  contents: yup.string().required("상품 설명을 입력해 주세요."),
  price: yup.string().required("판매 가격을 입력해 주세요."),
  // tags: yup.string(),
});

import * as yup from "yup";

export const MarketWriteSchema = yup.object({
  name: yup.string().required("상품이름을 입력해주세요."),
  remarks: yup.string().required("상품 소개를 입력해주세요."),
  contents: yup.string().required("상품 설명을 입력해주세요."),
  price: yup
    .number()
    .required("판매 가격을 입력해 주세요.")
    .transform((value) => (isNaN(value) ? undefined : value)),
  tags: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
});

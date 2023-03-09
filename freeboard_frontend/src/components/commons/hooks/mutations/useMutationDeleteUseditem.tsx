import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM = gql`
  mutation useditemId($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export default function useMutationDeleteUseditem() {
  const router = useRouter();

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const onClickDeleteUseditem = async () => {
    await deleteUseditem({
      variables: {
        useditemId: String(router.query.productsId),
      },
    });
    Modal.success({ content: "상품이 삭제되었습니다." });
    router.push("/main");
  };

  return { onClickDeleteUseditem };
}

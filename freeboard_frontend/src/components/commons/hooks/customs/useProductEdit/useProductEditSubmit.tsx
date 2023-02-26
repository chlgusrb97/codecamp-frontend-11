import { Modal } from "antd";
import { useRouter } from "next/router";
import { IUpdateUseditemInput } from "../../../../../commons/types/generated/types";
import useMutationUpdateUseditem from "../../mutations/useMutationUpdateUseditem";

export default function useProductEditSubmit() {
  const router = useRouter();

  const [updateUseditem] = useMutationUpdateUseditem();

  const onClickProductEditSubmit = async (
    data: IUpdateUseditemInput
  ): Promise<void> => {
    try {
      await updateUseditem({
        variables: {
          useditemId: String(router.query.productsId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            // images: data.images,
            // useditemAddress: {
            //   address: data.useditemAddress?.address,
            //   addressDetail: data.useditemAddress?.addressDetail,
            // },
          },
        },
      });
      void router.push(
        `/main/products/products-post-moved/${router.query.productsId}`
      );
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: `${error.message}` });
    }
  };

  return { onClickProductEditSubmit };
}

import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";
import useMutationUpdateUseditem from "../mutations/useMutationUpdateUseditem";
import {
  FETCH_USED_ITEM,
  useQueryFetchUsedItem,
} from "../queries/useQueryFetchUsedItem";
import useProductWriteSubmit from "./useProductWriteSubmit";

export default function useProductEditSubmit() {
  const router = useRouter();

  const [updateUseditem] = useMutationUpdateUseditem();

  const onClickProductEditSubmit =
    (images: string[]) =>
    async (editData: IUpdateUseditemInput): Promise<void> => {
      try {
        const result = await updateUseditem({
          variables: {
            useditemId: String(router.query.productsId),
            updateUseditemInput: {
              name: editData.name,
              remarks: editData.remarks,
              contents: editData.contents,
              price: Number(editData.price),
              tags: editData.tags,
              images,
              // useditemAddress: {
              //   address: data.useditemAddress?.address,
              //   addressDetail: data.useditemAddress?.addressDetail,
              // },
            },
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM,
              variables: { useditemId: router.query.productsId },
            },
          ],
        });
        void router.push(
          `/main/products/products-post-moved/${result.data?.updateUseditem._id}`
        );
      } catch (error) {
        if (error instanceof Error)
          Modal.error({ content: `${error.message}` });
      }
    };

  return { onClickProductEditSubmit };
}

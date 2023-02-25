import { useRouter } from "next/router";
import { ICreateUseditemInput } from "../../../../../commons/types/generated/types";
import useMutationCreateUseditem from "../../mutations/useMutationCreateUseditem";

export default function useProductWriteSubmit() {
  const router = useRouter();

  const [crateUsedItem] = useMutationCreateUseditem();

  const onClickProductWriteSubmit = async (
    data: ICreateUseditemInput
  ): Promise<void> => {
    const result = await crateUsedItem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: data.tags,
          images: data.images,
          useditemAddress: {
            address: data.useditemAddress?.address,
            addressDetail: data.useditemAddress?.addressDetail,
          },
        },
      },
    });
    router.push(
      `/main/products/products-post-moved/${result.data?.createUseditem._id}`
    );
  };
  return { onClickProductWriteSubmit };
}

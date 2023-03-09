import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { ICreateUseditemInput } from "../../../../commons/types/generated/types";
import useMutationMarketWrite from "../mutations/useMutationCreateUseditem";

export default function useProductWriteSubmit() {
  const router = useRouter();

  const [imageUrls, setImageUrls] = useState(["", ""]);

  const [crateUsedItem] = useMutationMarketWrite();

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
          images: [...imageUrls],
          useditemAddress: {
            zipcode: data.useditemAddress?.zipcode,
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

  const onChangeFileUrls = (imageUrl: string, index: number): void => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = imageUrl;
    setImageUrls(newImageUrls);
  };

  return {
    onClickProductWriteSubmit,
    onChangeFileUrls,
    imageUrls,
    setImageUrls,
  };
}

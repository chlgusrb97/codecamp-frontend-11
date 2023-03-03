import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ICreateUseditemInput } from "../../../../../commons/types/generated/types";
import useMutationCreateUseditem from "../../mutations/useMutationCreateUseditem";
import useMutationUploadFile from "../../mutations/useMutationUploadFile";

export default function useProductWriteSubmit() {
  const router = useRouter();

  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File>();

  const [crateUsedItem] = useMutationCreateUseditem();
  const [uploadFile] = useMutationUploadFile();

  const onClickProductWriteSubmit = async (
    data: ICreateUseditemInput
  ): Promise<void> => {
    // uploadFile
    // const resultFile = await uploadFile({ variables: { file } });
    // const url = resultFile.data?.uploadFile.url;
    console.log(data.images);

    // createUsedItem
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
    console.log(result.data?.createUseditem.images);
    // router.push(
    //   `/main/products/products-post-moved/${result.data?.createUseditem._id}`
    // );
  };

  return { onClickProductWriteSubmit };
}

import { useRouter } from "next/router";
import { ICreateUseditemInput } from "../../../../../commons/types/generated/types";
import useMutationMarketWrite from "../../mutations/useMutationMarketWrite";

export default function useMaketWriteSubmit() {
  const router = useRouter();

  const [crateUsedItem] = useMutationMarketWrite();

  const onClickMarketWriteSubmit = async (
    data: ICreateUseditemInput
  ): Promise<void> => {
    const result = await crateUsedItem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          // tags: data.tags,
          // images: data.images,
        },
      },
    });
    console.log(result);
  };
  return { onClickMarketWriteSubmit };
}

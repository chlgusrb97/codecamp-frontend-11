import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import Write from "../../../../src/components/units/22/write";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <>
      <Write />
    </>
  );
}

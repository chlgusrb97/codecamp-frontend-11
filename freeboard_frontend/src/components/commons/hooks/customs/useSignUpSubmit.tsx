import { Modal } from "antd";
import { useRouter } from "next/router";
import { IJoinFormData } from "../../../units/join/join.types";
import { useMutationCreateUser } from "../mutations/useMutationCreateUser";

export default function useJoinSubmit() {
  const router = useRouter();

  const createUser = useMutationCreateUser();

  const onClickSignUpSubmit = async (data: IJoinFormData): Promise<void> => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다." });
      void router.push("/main/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickSignUpSubmit,
  };
}

import { Modal } from "antd";
import { useRouter } from "next/router";
import { ISignUpFormData } from "../../../../units/SignUp/signUp.types";
import { useMutationCreateUser } from "../../mutations/useMutationSignUp";

export default function useSignUpSubmit() {
  const router = useRouter();

  const createUser = useMutationCreateUser();

  const onClickSignUpSubmit = async (data: ISignUpFormData): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다." });
      void router.push("/main/signIn");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickSignUpSubmit,
  };
}

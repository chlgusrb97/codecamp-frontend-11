import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores";
import { ISignInFormData } from "../../../../units/signIn/signIn.types";
import useMutationLoginUser from "../../mutations/useMutationSignIn";

export default function useSignInSubmit() {
  const router = useRouter();

  const [loginUser] = useMutationLoginUser();
  const [, SetAccessToken] = useRecoilState(accessTokenState);

  const onClickSignInSubmit = async (data: ISignInFormData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        Modal.error({
          content: "아이디 또는 비밀번호를 잘못 입력하셨습니다. ",
        });
        return;
      }
      SetAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push("/main/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { onClickSignInSubmit };
}

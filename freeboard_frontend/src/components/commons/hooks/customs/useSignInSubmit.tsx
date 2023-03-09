import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { ILoginFormData } from "../../../units/login/login.types";
import useMutationLoginUserExample from "../mutations/useMutationLoginUser";

export default function useSignInSubmit() {
  const router = useRouter();

  const [loginUser] = useMutationLoginUserExample();
  const [, SetAccessToken] = useRecoilState(accessTokenState);

  const onClickSignInSubmit = async (data: ILoginFormData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;

      if (accessToken === undefined) {
        Modal.error({
          content: "아이디 또는 비밀번호를 잘못 입력하셨습니다. ",
        });
        return;
      }
      SetAccessToken(accessToken);
      // localStorage.setItem("accessToken", accessToken);

      void router.push("/main");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { onClickSignInSubmit };
}

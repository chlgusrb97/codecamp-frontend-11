import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChanegeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChanegePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogIn = async () => {
    try {
      const result = await loginUser({
        variables: {
          password,
          email,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        alert("로그인에 실패하였습니다.");
        return;
      }
      setAccessToken(accessToken);

      void router.push("/Login/login-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <input type="text" placeholder="이메일" onChange={onChanegeEmail} />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={onChanegePassword}
      />
      <button onClick={onClickLogIn}>로그인</button>
    </>
  );
}

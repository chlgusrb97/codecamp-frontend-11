import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../../commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function useMutationLoginUserExample() {
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  return [loginUserExample];
}

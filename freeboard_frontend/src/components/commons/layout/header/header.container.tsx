import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./header.presenter";
import { FETCH_USER_LOGGED_IN } from "./header.queries";

export default function LayoutHeaderContainer() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  console.log(data);
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.error({ content: "로그인 후 이용 가능합니다." });
      void router.push("/main/signin");
    }
  }, []);

  const toggleSide = (toggled: boolean) => {
    setIsOpen(toggled);
  };
  const onClickSignIn = (): void => {
    void router.push("/main/signIn");
  };

  const onClickSignUp = (): void => {
    void router.push("/main/signUp");
  };
  return (
    <LayoutHeaderUI
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      toggleSide={toggleSide}
      onClickSignIn={onClickSignIn}
      onClickSignUp={onClickSignUp}
      data={data}
    />
  );
}

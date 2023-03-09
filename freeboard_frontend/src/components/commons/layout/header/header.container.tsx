import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./header.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./header.queries";

export default function LayoutHeaderContainer() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const toggleSide = (toggled: boolean) => {
    setIsOpen(toggled);
  };
  const onClickSignIn = (): void => {
    void router.push("/main/login");
  };

  const onClickSignUp = (): void => {
    void router.push("/main/join");
  };

  const onClickLogoutUser = async () => {
    await logoutUser();
    Modal.success({ content: "로그아웃 되었습니다." });

    window.location.reload();
  };

  const onClickPaymentModal = () => {
    setShow(true);
  };

  return (
    <LayoutHeaderUI
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      toggleSide={toggleSide}
      onClickSignIn={onClickSignIn}
      onClickSignUp={onClickSignUp}
      onClickLogoutUser={onClickLogoutUser}
      data={data}
      show={show}
      setShow={setShow}
      onClickPaymentModal={onClickPaymentModal}
    />
  );
}

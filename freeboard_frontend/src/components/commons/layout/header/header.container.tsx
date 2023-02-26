import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./header.presenter";
import { FETCH_USER_LOGGED_IN } from "./header.queries";

export default function LayoutHeaderContainer() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    setMounted(true);
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

  // const onClickLogout = async () => {
  //   setLogout(true);

  //   const result = await logoutUser({
  //     variables: {
  //       boolean: logout,
  //     },
  //   });
  // };
  return (
    <LayoutHeaderUI
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      toggleSide={toggleSide}
      onClickSignIn={onClickSignIn}
      onClickSignUp={onClickSignUp}
      data={data}
      mounted={mounted}
    />
  );
}

import * as S from "./header.styles";
import { ILayoutHeaderUIProps } from "./header.types";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Header_Section>
          <S.Menu>
            <li>
              <S.Logo>CAMPEE</S.Logo>
            </li>
            <li>LIFE MARKET</li>
            <li>
              <Link href="/main/boards">
                <a>SHOW YOUR LIFE.</a>
              </Link>
            </li>
          </S.Menu>
          <S.Right_Header>
            {props.data?.fetchUserLoggedIn._id ? (
              <>
                <Link href="/main/mypage">
                  <S.UserName>{`${props.data?.fetchUserLoggedIn.name}님`}</S.UserName>
                </Link>
                <li onClick={props.onClickLogoutUser}>로그아웃</li>
              </>
            ) : (
              <>
                <li onClick={props.onClickSignIn}>로그인</li>
                <li onClick={props.onClickSignUp}>회원가입</li>
                <li onClick={props.onClickSignUp}>회원가입</li>
              </>
            )}
          </S.Right_Header>
        </S.Header_Section>
        <S.HamburgerBox>
          <Hamburger
            size={30}
            color="#eee"
            toggled={props.isOpen}
            toggle={props.setIsOpen}
            onToggle={props.toggleSide}
          />
        </S.HamburgerBox>
        <S.Menu_Box isOpen={props.isOpen}>
          <S.Ul>
            <li>LIVE YOUR LIFE.</li>
          </S.Ul>
        </S.Menu_Box>
      </S.Wrapper>
      <></>
    </>
  );
}

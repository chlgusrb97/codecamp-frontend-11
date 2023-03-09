import * as S from "./header.styles";
import { ILayoutHeaderUIProps } from "./header.types";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { restoreBasketCount } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import Payment from "../../payment/payment.index";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const [recoilBaskets] = useRecoilState<number>(restoreBasketCount);

  return (
    <>
      {props.show ? (
        <Payment show={props.show} setShow={props.setShow} />
      ) : (
        <></>
      )}
      <S.Wrapper>
        <S.Header_Section_01>
          {props.data?.fetchUserLoggedIn._id ? (
            <>
              <li>
                <S.User>
                  {props.data?.fetchUserLoggedIn.name}님 포인트
                  <S.Point>
                    {props.data?.fetchUserLoggedIn.userPoint?.amount} P
                  </S.Point>
                </S.User>
              </li>
              <li>
                <S.Payment onClick={props.onClickPaymentModal}>충전</S.Payment>
              </li>
              <li onClick={props.onClickLogoutUser}>
                <S.Logout_Button>로그아웃</S.Logout_Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/main/login">
                  <a>로그인</a>
                </Link>
              </li>
              <li>
                <Link href="/main/join">
                  <a>회원가입</a>
                </Link>
              </li>
            </>
          )}
          <li>
            <Link href="/main/login">
              <a>
                <div>
                  장바구니
                  <div>
                    <span>{recoilBaskets}</span>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        </S.Header_Section_01>
        <S.DevideLine></S.DevideLine>
        <S.Header_Section_02>
          <Link href="/main">
            <a>
              <img src="/images/logo01.png" alt="로고" />
            </a>
          </Link>
          <Link href="/main/products-post">
            <a>
              <div>
                <img src="/images/dollar.png" />
                <span>판매하기</span>
              </div>
            </a>
          </Link>
        </S.Header_Section_02>
        <S.DevideLine></S.DevideLine>
      </S.Wrapper>
      {/* {props.show ? (
        <Payment show={props.show} setShow={props.setShow} />
      ) : (
        <></>
      )}
      <S.Wrapper>
        <S.Header_Section>
          <S.Menu>
            <li>
              <S.Logo>CAMPEE</S.Logo>
            </li>
            <Link href="/main/products">
              <a>LIFE MARKET</a>
            </Link>
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
      </S.Wrapper> */}
    </>
  );
}

import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  color: #eee;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Logo = styled.span`
  cursor: pointer;
  font-family: Kanit-Bold;
  font-size: 46px;
  margin-right: 100px;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  li {
    cursor: pointer;
    font-family: Kanit-Light;
    font-size: 20px;

    :not(:first-child) {
      margin-right: 50px;
    }
  }
`;

const LogIn = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    font-family: NaNum-Bold;
    font-size: 12px;
    margin-left: 15px;
    cursor: pointer;
    transition: all 0.3 ease-in-out;

    :hover {
      text-decoration: underline;
    }
    :last-child {
      margin-right: 63px;
    }
  }
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickSignIn = () => {
    void router.push("/main/sign/signIn");
  };

  const onClickSignUp = () => {
    void router.push("/main/sign/signUp");
  };

  return (
    <>
      <Wrapper>
        <Menu>
          <li>
            <Logo>CAMPEE</Logo>
          </li>
          <li>LIFE MARKET</li>
          <li>SHOW YOUR LIFE.</li>
        </Menu>
        <LogIn>
          <li onClick={onClickSignIn}>로그인</li>
          <li onClick={onClickSignUp}>회원가입</li>
        </LogIn>
      </Wrapper>
    </>
  );
}

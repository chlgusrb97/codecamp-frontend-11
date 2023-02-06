import * as S from "./navigation.styles";
import { Fade as Hamburger } from "hamburger-react";

export default function LayoutNavigationUI(props) {
  return (
    <>
      <S.HamburgetBox>
        <Hamburger
          size={100}
          color="#fff"
          toggled={props.isOpen}
          toggle={props.setOpen}
          onToggle={props.toggleSide}
        />
      </S.HamburgetBox>
      <S.Wrapper isOpen={props.isOpen}></S.Wrapper>
    </>
  );
}

import * as S from "./navigation.styles";
import { Fade as Hamburger } from "hamburger-react";
import { ILayoutNavigationUI } from "./navigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUI) {
  return (
    <>
      <S.HamburgetBox>
        <Hamburger
          size={30}
          color="#eee"
          toggled={props.isOpen}
          toggle={props.setIsOpen}
          onToggle={props.toggleSide}
        />
      </S.HamburgetBox>
      <S.Wrapper isOpen={props.isOpen}>
        <S.Ul>
          <li>LIVE YOUR LIFE.</li>
        </S.Ul>
      </S.Wrapper>
    </>
  );
}

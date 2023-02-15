import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;

    font-family: Nanum-Bold;
  }

  @font-face {
    font-family: Kanit-Bold;
    src: url("/fonts/Kanit-Bold.ttf");
  }
  @font-face {
    font-family: Kanit-Medium;
    src: url("/fonts/Kanit-Medium.ttf");
  }
  @font-face {
    font-family: Kanit-Light;
    src: url("/fonts/Kanit-Light.ttf");
  }
  @font-face {
    font-family: NaNum-Bold;
    src: url("/fonts/NanumGothic-Bold.ttf");
  }
  @font-face {
    font-family: NaNum-ExtraBold;
    src: url("/fonts/NanumGothic-ExtraBold.ttf");
  }
  @font-face {
    font-family: Nanum-Regular;
    src: url("/fonts/NanumGothic-Regular.ttf");
  }
`;

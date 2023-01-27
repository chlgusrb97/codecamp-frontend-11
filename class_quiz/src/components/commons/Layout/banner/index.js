import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  height: 400px;
  background-color: pink;
`;

export const Div = styled.div`
  box-sizing: border-box;
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const SliderStyles = styled(Slider)`
  ul {
    margin-bottom: 50px;
    color: white;
  }

  ul li button::before {
    color: white;
  }
`;

export default function BANNER() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <SliderStyles {...settings}>
        <Div>
          <Img src="/images/background01.jpg" />
        </Div>
        <Div>
          <Img src="/images/background02.jpg" />
        </Div>
        <Div>
          <Img src="/images/background03.jpg" />
        </Div>
        <Div>
          <Img src="/images/background04.jpg" />
        </Div>
        <Div>
          <Img src="/images/background05.jpg" />
        </Div>
        <Div>
          <Img src="/images/background06.jpg" />
        </Div>
      </SliderStyles>
    </Wrapper>
  );
}

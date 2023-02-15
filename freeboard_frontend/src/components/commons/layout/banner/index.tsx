import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export const Wrapper = styled.div`
  min-width: 90vw;
  min-height: 100vh;
  background-color: pink;
  background-image: url("/img/banner/banner01.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: #eee;
  font-size: 4rem;
  font-family: Kanit-Medium;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
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

export default function LayoutBanner() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <Wrapper>
      <Title>LIVE YOUR LIFE.</Title>
      {/* <SliderStyles {...settings}>
        <Div>
          <Img src="/img/banner/banner01.jpg" />
          <span style={{ position: "absolute" }}>LIVE YOUR LIFE.</span>
        </Div>
        <Div>
          <Img src="/img/banner/banner01.jpg" />
        </Div>
        <Div>
          <Img src="/img/banner/banner01.jpg" />
        </Div>
        <Div>
          <Img src="/img/banner/banner01.jpg" />
        </Div>
      </SliderStyles> */}
    </Wrapper>
  );
}

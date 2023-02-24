import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1024px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Items_Box = styled.ul`
  width: calc(20% - 8px);
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(200, 200, 200);
  margin-bottom: 15px;
  cursor: pointer;

  li {
    background-color: #fff;
    padding: 15px 10px;
    border-top: 1px solid rgb(200, 200, 200);
  }
`;

export const Imgs_Box = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Product_Name = styled.h2`
  font-size: 14px;
  margin-bottom: 15px;
  font-family: Nanum-Regular;
`;

export const Price = styled.h2`
  font-size: 16px;
  font-family: Nanum-ExtraBold;

  span {
    font-size: 12px;
    margin-left: 3px;
    font-family: Nanum-ExtraBold;
  }
`;

export const InfiniteScroller = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Anchor = styled.a`
  position: fixed;
  right: 40px;
  bottom: 40px;
  padding: 20px 40px;
  background-color: #f16767;
  color: #fff;
  font-family: Nanum-ExtraBold;
  font-size: 16px;
  z-index: 999;
  cursor: pointer;
`;

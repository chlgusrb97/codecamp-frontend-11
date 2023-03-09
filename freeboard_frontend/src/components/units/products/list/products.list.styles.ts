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
  width: 1374px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 80px;
`;

export const Items_Box = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #555;
  cursor: pointer;
  width: 250px;


  > li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 16px;

    > span {
      font-size: 12px;
      color: #a9a9a9
    }
  }
`;

export const Imgs_Box = styled.div`
  width: 100%;
  height: 220px;
  background-color: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Product_Name = styled.h2`
  font-size: 16px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled.h2`
  font-size: 16px;
`;

export const InfiniteScroller = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 31px;
`;

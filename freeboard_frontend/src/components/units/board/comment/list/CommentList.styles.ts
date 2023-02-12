import styled from "@emotion/styled";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CommentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  padding: 80px 0px;
  background-color: #fff;
  border-top: 1px solid #bdbdbd;
`;

export const ConmmentSection2 = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;
export const ConmmentSection2_Usericon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
export const ConmmentSection2_Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Contents_Container_Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Contents_Container_Contents_box = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ConmmentSection2_Contents_box_Writer = styled.div`
  font-size: 16;
  font-weight: 500;
  margin-right: 18px;
`;
export const ConmmentSection2_Contents_box_Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  margin-top: 4px;
  color: #4f4f4f;
`;
export const ConmmentSection2_Contents_box_Date = styled.p`
  margin: 20px 0;
  color: #bdbdbd;
`;
export const ConmmentSection2_Contents_Iconbox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  right: 0;
`;
export const ConmmentSection2_Contents_Iconbox_edit = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;
export const ConmmentSection2_Contents_Iconbox_delete = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 16px;
  cursor: pointer;
`;

export const InfiniteScroll_Box = styled.div`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const Modal_Input = styled.input`
  border: 1px solid #000;
`;

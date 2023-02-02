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
export const ConmmentSection1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;
export const ConmmentSection1_Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ConmmentSection1_Head_Icon = styled.img``;
export const ConmmentSection1_Head_Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-left: 14px;
`;
export const ConmmentSection1_Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ConmmentSection1_Contents_1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px 0 20px;
`;
export const ConmmentSection1_Contents_1_Input = styled.input`
  width: 158px;
  padding: 14px 0 14px 20px;
  margin-right: 14px;
  border: 1px solid #bdbdbd;

  ::placeholder {
    color: #828282;
  }
`;
export const Contents_Gradebox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Contents_Gradebox_Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  cursor: pointer;
`;
export const ConmmentSection1_Contents_2 = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 161px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
`;
export const ConmmentSection1_Contents_2_Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 0 0 20px;
  border: none;
  resize: none;

  ::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: #bdbdbd;
  }
`;
export const ConmmentSection1_Contents_2_box = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bdbdbd;

  padding-left: 20px;
`;
export const Contents_2_box_Textlength = styled.span`
  color: #bdbdbd;
  padding: 14px 0 14px 20px;
`;
export const Contents_2_box_Button = styled.button`
  right: 0;
  height: 100%;
  padding: 14px 16px;
  background-color: black;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

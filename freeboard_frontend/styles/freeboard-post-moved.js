import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  padding: 80px 102px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`

export const Section1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Section1_WritterLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const WritterLeft_ProfileImg = styled.img`
  margin-right: 12px;
`

export const WritterLeft_TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const WriiterLeft_TextBox_Wriiter = styled.span`
  font-size: 24px;
  font-weight: 500;
`

export const WriiterLeft_TextBox_DateBox = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`

export const TextBox_DateBox_DateTitle = styled.span`

`

export const TextBox_DateBox_DateContents = styled.span`

`

export const Section1_WritterRight = styled.div`
  display: flex;
`

export const Section1_WritterRight_LinkImg = styled.img`
  margin-right: 20px;
  cursor: pointer;
`

export const Section1_WritterRight_LocationImg = styled.img`
  cursor: pointer;
`

export const Section1_DivideLine = styled.div`
  width: 100%;
  margin: 20px 0 80px;
  border-top: 1px solid #bdbdbd;
`

export const Section02 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Section02_ContentsTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
`

export const Section02_ContentsImg = styled.img`
  margin: 40px 0;
`

export const Section02_ContentsText = styled.p`
  font-size: 16px;
  font-weight: 400;
`

export const Section02_ContentsVideoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 120px 0 160px;
`

export const Section02_Section02_ContentsVideoBox_Video = styled.img`
  
`

export const Section02_ContentsUpDownBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
`

export const Section02_ContentsUpDownBox_Up = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  list-style: none;
`

export const ContentsUpDownBox_Up_img = styled.img`
  cursor: pointer;
`

export const ContentsUpDownBox_Up_count = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #FFD600;
`

export const Section02_ContentsUpDownBox_Down = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  list-style: none;
`

export const ContentsUpDownBox_Down_img = styled.img`
  width: 20px;
  height: 100%;
  cursor: pointer;
`

export const ContentsUpDownBox_Down_count = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #828282;
`
import styled from '@emotion/styled'

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
  padding: 60px 102px 100px 102px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`

export const HeadTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;
`

export const Section1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Section1_Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  width: 100%;
`

export const Section1_Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 100%;
`

export const InputNameTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  padding: 0;
`
export const Input = styled.input`
  border: 1px solid #bdbdbd;
  background-color: #fff;
  margin: 0;
  padding: 0;
  padding: 14px 16px;
  margin-top: 16px;
  margin-bottom: 40px;
`

export const InputTitle = styled.span`
font-size: 16px;
font-weight: 500;
color: #000;
`
export const Section2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Section3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Section3_Input = styled.textarea`
  border: 1px solid #bdbdbd;
  background-color: #fff;
  padding: 14px 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 480px;
  resize: none;
`

export const Section4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Section4_AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const AddressBox_Num = styled.p`
  border: 1px solid #bdbdbd;
  background-color: #fff;
  padding: 13px 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 77px;
  text-align: center;
  color: #bdbdbd;
  box-sizing: border-box;
`
export const AddressBox_Btn = styled.button`
  color: #fff;
  background-color: #000;
  cursor: pointer;
  margin: 0;
  border: 0;
  padding: 14px 16px;
  margin-left: 16px;
`
export const Section4_Input1 = styled.input`
border: 1px solid #bdbdbd;
background-color: #fff;
padding: 14px 16px;
`

export const Section4_Input2 = styled.input`
border: 1px solid #bdbdbd;
background-color: #fff;
padding: 14px 16px;
margin-top: 30px;
margin-bottom: 37px;
`
export const Section5 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Section6 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Section6_Container = styled.div`
  margin: 16px 0 40px;
  display: flex;
  flex-direction: row;
`
export const Container_Boxes = styled.div`
  position: relative;
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Boxes_Plus = styled.div`
  color: #4f4f4f;
`
export const Boxes_Text = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
`
export const Section7 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 82px;
`
export const Section7_SettingBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const SettingBox_Li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const RadioBtn = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  margin-right: 10px;
  accent-color: #ffd600;
`
export const RadioText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-right: 22px;
`

export const SubmitBtn = styled.button`
  padding: 14px 60px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.isActive ? "#ffd600" : "#bdbdbd"};
`
export const InputTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const TextError = styled.span`
  color: tomato;
  font-size: 14px;
  font-weight: 600;
  margin-left: 15px;
`
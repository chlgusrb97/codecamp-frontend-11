import * as S from "./CreateBoard.styles";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { ICreateBoardUI } from "./CreateBoard.types";

export default function CreateBoardUI(props: ICreateBoardUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.HeadTitle>게시물 {props.isEdit ? "수정" : "등록"} </S.HeadTitle>
        <S.Section1>
          <S.Section1_Left>
            <S.InputTitleBox>
              <S.InputNameTitle>작성자</S.InputNameTitle>
              <S.TextError>{props.writerErr}</S.TextError>
            </S.InputTitleBox>
            <S.Input
              placeholder="이름을 적어주세요."
              onChange={props.writer}
              defaultValue={props.data?.fetchBoard?.writer ?? ""}
              readOnly={!!props.data?.fetchBoard?.writer}
            />
          </S.Section1_Left>
          <S.Section1_Right>
            <S.InputTitleBox>
              <S.InputTitle>비밀번호</S.InputTitle>
              <S.TextError>{props.passwordErr}</S.TextError>
            </S.InputTitleBox>
            <S.Input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={props.password}
            />
          </S.Section1_Right>
        </S.Section1>

        <S.Section2>
          <S.InputTitleBox>
            <S.InputTitle>제목</S.InputTitle>
            <S.TextError>{props.titleErr}</S.TextError>
          </S.InputTitleBox>
          <S.Input
            placeholder="제목을 작성해주세요."
            onChange={props.title}
            defaultValue={props.data?.fetchBoard.title}
          />
        </S.Section2>

        <S.Section3>
          <S.InputTitleBox>
            <S.InputTitle>내용</S.InputTitle>
            <S.TextError>{props.contentsErr}</S.TextError>
          </S.InputTitleBox>
          <S.Section3_Input
            placeholder="내용을 작성해주세요."
            onChange={props.contents}
            defaultValue={props.data?.fetchBoard.contents}
          />
        </S.Section3>

        <S.Section4>
          <S.InputTitle>주소</S.InputTitle>
          <S.Section4_AddressBox>
            <S.AddressBox_Num
              value={
                props.zipcode !== ""
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
              disabled
            />
            <S.AddressBox_Btn onClick={props.showModal}>
              우편번호 검색
            </S.AddressBox_Btn>
            {props.isModalOpen && (
              <Modal
                title="주소 검색"
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcodeEmbed onComplete={props.handleComplete} />
              </Modal>
            )}
          </S.Section4_AddressBox>
          <S.Section4_Input1
            value={
              props.address !== ""
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
            disabled
          />
          <S.Section4_Input2
            placeholder="상세 주소를 입력해주세요."
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""
            }
          />
        </S.Section4>

        <S.Section5>
          <S.InputTitle>유튜브</S.InputTitle>
          <S.Input
            placeholder="링크를 복사해주세요."
            onChange={props.YoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </S.Section5>

        <S.Section6>
          <S.InputTitle>사진 첨부</S.InputTitle>
          <S.Section6_Container>
            <S.Container_Boxes>
              <S.Boxes_Plus>+</S.Boxes_Plus>
              <S.Boxes_Text>Upload</S.Boxes_Text>
            </S.Container_Boxes>
            <S.Container_Boxes>
              <S.Boxes_Plus>+</S.Boxes_Plus>
              <S.Boxes_Text>Upload</S.Boxes_Text>
            </S.Container_Boxes>
            <S.Container_Boxes>
              <S.Boxes_Plus>+</S.Boxes_Plus>
              <S.Boxes_Text>Upload</S.Boxes_Text>
            </S.Container_Boxes>
          </S.Section6_Container>
        </S.Section6>

        <S.Section7>
          <S.InputTitle>사진 첨부</S.InputTitle>
          <S.Section7_SettingBox>
            <S.SettingBox_Li>
              <S.RadioBtn type="radio" name="setting" />
              <S.RadioText>유튜브</S.RadioText>
            </S.SettingBox_Li>
            <S.SettingBox_Li>
              <S.RadioBtn type="radio" name="setting" />
              <S.RadioText>사진</S.RadioText>
            </S.SettingBox_Li>
          </S.Section7_SettingBox>
        </S.Section7>

        <S.SubmitBtn
          onClick={props.isEdit ? props.onClickUpdate : props.onClickBtn}
          isActive={props.isEdit ? !props.isActive : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.SubmitBtn>
      </S.Wrapper>
    </S.Container>
  );
}

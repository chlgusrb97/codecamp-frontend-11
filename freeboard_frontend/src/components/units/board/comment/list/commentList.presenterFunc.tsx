import { Modal, Rate } from "antd";
import * as S from "./commentList.styles";
import { ICommentListFuncUI } from "./commentList.types";

export default function CommentListFuncUI(props: ICommentListFuncUI) {
  return (
    <>
      <S.ConmmentSection2 key={props.el._id}>
        <S.ConmmentSection2_Container>
          <S.ConmmentSection2_Usericon src="/img/profile.png" />
          <S.Contents_Container_Contents>
            <S.Contents_Container_Contents_box>
              <S.ConmmentSection2_Contents_box_Writer>
                {props.el.writer}
              </S.ConmmentSection2_Contents_box_Writer>
              <span>
                <Rate value={props.el.rating} disabled />
              </span>
            </S.Contents_Container_Contents_box>
            <S.ConmmentSection2_Contents_box_Text>
              {props.el.contents}
            </S.ConmmentSection2_Contents_box_Text>
            <S.ConmmentSection2_Contents_box_Date>
              {props.el.createdAt}
            </S.ConmmentSection2_Contents_box_Date>
          </S.Contents_Container_Contents>
        </S.ConmmentSection2_Container>
        <S.ConmmentSection2_Contents_Iconbox>
          <S.ConmmentSection2_Contents_Iconbox_edit src="/img/edit.png" />
          <S.ConmmentSection2_Contents_Iconbox_delete
            src="/img/delete.png"
            id={props.el._id}
            onClick={props.showModal}
          />
        </S.ConmmentSection2_Contents_Iconbox>
      </S.ConmmentSection2>

      {props.isModalOpen && (
        <Modal
          title="비밀번호를 입력해주세요."
          open={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <input type="password" onChange={props.onChangePassword} />
        </Modal>
      )}
    </>
  );
}

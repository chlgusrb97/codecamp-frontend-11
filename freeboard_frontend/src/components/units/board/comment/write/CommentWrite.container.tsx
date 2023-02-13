import { CREATE_COMMENT, UPDATE_COMMENT } from "./CommentWrite.queries";
import { useRouter } from "next/router";
import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { FETCH_COMMENTS } from "../list/CommentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../../commons/types/generated/types";
import { Modal } from "antd";
import { ICommentWrite } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWrite) {
  const router = useRouter();

  const [writer, setCommentWriter] = useState("");
  const [password, setCommentPassword] = useState("");
  const [contents, setCommentContents] = useState("");
  const [rate, setRate] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardCommentArgs
  >(CREATE_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_COMMENT);

  const onChangeCommentWriter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentWriter(e.target.value);
  };

  const onChangeCommentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(e.target.value);
  };

  const onChangeCommentContents = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentContents(e.target.value);
  };

  const onChangeRate = (value: SetStateAction<number>) => {
    setRate(value);
  };

  const createBoardCommentBtn = async () => {
    const result = await createBoardComment({
      variables: {
        boardId: String(router.query.ID),
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: rate,
        },
      },
      refetchQueries: [
        {
          query: FETCH_COMMENTS,
          variables: { boardId: router.query.ID },
        },
      ],
    });
    setCommentWriter("");
    setCommentPassword("");
    setCommentContents("");
    setRate(0);
  };
  console.log(props.isEdit);
  const onClickUpdate = async (): Promise<void> => {
    if (password === "") {
      Modal.error({ content: "비밀번호가 입력되지 않았습니다." });
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents !== "") updateBoardCommentInput.contents = contents;
      if (rate !== props.el?.rating) updateBoardCommentInput.rating = rate;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.ID },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <CommentWriteUI
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      createBoardCommentBtn={createBoardCommentBtn}
      onChangeRate={onChangeRate}
      writer={writer}
      password={password}
      contents={contents}
      rate={rate}
      isEdit={props.isEdit}
      el={props.el}
      onClickUpdate={onClickUpdate}
    />
  );
}

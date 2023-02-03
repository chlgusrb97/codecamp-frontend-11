import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./CreateBoard.queries";
import CreateBoardUI from "./CreateBoard.presenter";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import type { Address } from "react-daum-postcode";
import { IBoardWrite } from "./CreateBoard.types";

export default function BoardWrite(props: IBoardWrite) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [writerErr, setWriterErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentsErr, setContentsErr] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const createBoardPush = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      router.push(
        `/boards/freeboard-post-moved/${result.data.createBoard._id}`
      );
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    Modal.success({ content: "게시글 등록에 성공했습니다!!" });
  };

  const onClickUpdate = async () => {
    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      if (typeof router.query.ID !== "string") {
        Modal.error({ content: "시스템에 문제가 있습니다." });
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.ID,
          password,
          updateBoardInput,
        },
      });
      router.push(
        `/boards/freeboard-post-moved/${result.data.updateBoard._id}`
      );
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: `${error.message}` });
    }
  };

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);

    if (event.target.value) {
      setWriterErr("");
    } else {
      setWriterErr("* 이름을 입력해주세요.");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
      setWriterErr("");
    } else {
      setIsActive(false);
    }
  }

  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);

    if (event.target.value) {
      setPasswordErr("");
    } else {
      setPasswordErr("* 비밀번호를 입력해주세요.");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
      setPasswordErr("");
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);

    if (event.target.value) {
      setTitleErr("");
    } else {
      setTitleErr("* 제목을 입력해주세요.");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
      setTitleErr("");
    } else {
      setIsActive(false);
    }
  }

  function onChangeText(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);

    if (event.target.value) {
      setContentsErr("");
    } else {
      setContentsErr("* 내용을 입력해주세요.");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
      setContentsErr("");
    } else {
      setIsActive(false);
    }
  }

  const onClickBtn = () => {
    if (!writer) {
      setWriterErr("* 이름을 입력해주세요.");
    } else {
      setWriterErr("");
    }

    if (!password) {
      setPasswordErr("* 비밀번호를 입력해주세요.");
    } else {
      setPassword("");
    }

    if (!title) {
      setTitleErr("* 제목을 입력해주세요.");
    } else {
      setTitleErr("");
    }

    if (!contents) {
      setContentsErr("* 내용을 작성해주세요.");
    } else {
      setContentsErr("");
    }

    if (writer && password && title && contents) {
      createBoardPush();
    }
  };

  const handleComplete = (data: Address) => {
    setIsModalOpen(false);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const onChangeAddressDetail = (data: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(data.currentTarget.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <CreateBoardUI
      writer={onChangeName}
      password={onChangePassword}
      title={onChangeTitle}
      contents={onChangeText}
      YoutubeUrl={onChangeYoutubeUrl}
      writerErr={writerErr}
      passwordErr={passwordErr}
      titleErr={titleErr}
      contentsErr={contentsErr}
      onClickBtn={onClickBtn}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isModalOpen={isModalOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      address={address}
      zipcode={zipcode}
      onChangeAddressDetail={onChangeAddressDetail}
    />
  );
}

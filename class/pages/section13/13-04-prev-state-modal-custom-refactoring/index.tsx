import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  // const showModal = (): void => {
  //   setIsOpen((prev) => !prev); // isOpen이 함수 내에 없기 때문에 상위에 있는 isOpen을 가져와서 기본값 false를 가져온 값을 반대로 돌려 true를 반환함.
  // };

  // const handleOk = (): void => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = (): void => {
  //   setIsOpen((prev) => !prev);
  // };

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    setIsOpen((prev) => !prev);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기!!</button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법(ex, 이력서 등) */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법(ex, 신용카드, 비밀번호 등) */}
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

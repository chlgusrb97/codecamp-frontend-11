import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (data) => {
    console.log(data);
    setIsModalOpen(false);
    setAddress(data.address);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        주소 검색
      </Button>

      {isModalOpen && (
        <Modal title="주소" open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />;
        </Modal>
      )}

      <span>{address}</span>
    </>
  );
};

export default App;

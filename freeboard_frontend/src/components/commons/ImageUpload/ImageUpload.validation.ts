import { Modal } from "antd";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function ImageUploadCheck(file?) {
  if (file?.size === undefined) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file.size > MAX_FILE_SIZE) {
    Modal.error({ content: "파일의 용량은 5MB를 초과할 수 없습니다." });
    return false;
  }
  return true;
}

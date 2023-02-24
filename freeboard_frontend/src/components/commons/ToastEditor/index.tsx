import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef } from "react";

interface IToastEditor {
  height: string;
  onChangeContents: (value: string) => void;
}

export default function ToastEditor(props: IToastEditor) {
  const opitons = {
    usageStatistics: false,
  };

  const editor = new Editor(opitons);

  console.log(editor.getInstance(), "QQQ");

  return (
    <Editor
      height={props.height}
      autofocus={false}
      initialEditType="markdown"
      plugins={[colorSyntax]}
      language="ko-KR"

      // onChange={props.onChangeContents}
    />
  );
}

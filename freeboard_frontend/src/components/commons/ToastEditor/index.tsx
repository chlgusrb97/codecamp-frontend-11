import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { memo, MutableRefObject } from "react";

interface IToastEditor {
  editorRef: MutableRefObject<any>;
  onChangeEditor: (value: string) => void;
  contents: string;
  placeholder: string;
  defaultValue?: string;
}

export default function ToastEditor(props: IToastEditor) {
  return (
    <>
      <Editor
        ref={props.editorRef}
        height="600px"
        autofocus={false}
        initialEditType="markdown"
        plugins={[colorSyntax]}
        language="ko-KR"
        onChange={props.onChangeEditor}
        placeholder={props.placeholder}
        initialValue={props.defaultValue ?? ""}
      />
    </>
  );
}

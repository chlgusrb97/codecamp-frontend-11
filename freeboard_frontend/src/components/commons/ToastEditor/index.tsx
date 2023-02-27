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
}

export default function ToastEditor(props: IToastEditor) {
  console.log(props.contents);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  return (
    <>
      <Editor
        // initialValue={props.contents}
        ref={props.editorRef}
        height="600px"
        autofocus={false}
        initialEditType="markdown"
        plugins={[colorSyntax]}
        language="ko-KR"
        // toolbarItems={toolbarItems}
        onChange={props.onChangeEditor}
      />
    </>
  );
}

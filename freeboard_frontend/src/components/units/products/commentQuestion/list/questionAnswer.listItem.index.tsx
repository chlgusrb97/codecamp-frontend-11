import { IQuestionAnswerListItemUIProps } from "./questionAnswer.list.types";

export default function ProductsQuestionAnswerListItemUI(
  props: IQuestionAnswerListItemUIProps
) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: " 50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{props.el.contents}</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src="/img/edit.png" style={{ cursor: "pointer" }} />
          <img
            src="/img/delete.png"
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
        </div>
      </div>
    </>
  );
}

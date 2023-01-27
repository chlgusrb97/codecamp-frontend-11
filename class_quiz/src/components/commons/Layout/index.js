import HEADER from "./header";
import BANNER from "./banner";
import NAVIGATION from "./navigation";
import ASIDE from "./aside";
import BODY from "./body";
import FOOTER from "./footer";

export default function Layout(props) {
  return (
    <>
      <HEADER />
      <BANNER />
      <NAVIGATION />
      <div style={{ display: "flex" }}>
        <ASIDE />
        <BODY>
          <div>{props.children}</div>
        </BODY>
      </div>
      <FOOTER />
    </>
  );
}

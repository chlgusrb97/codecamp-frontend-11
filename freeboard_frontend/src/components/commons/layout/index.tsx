import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
// import { useRouter } from "next/router";

// const HIDDEN_HEADERS = ["/boards/freeboard-post"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  // const router = useRouter();

  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {/* {!isHiddenHeader && } */}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div>{props.children}</div>
    </>
  );
}

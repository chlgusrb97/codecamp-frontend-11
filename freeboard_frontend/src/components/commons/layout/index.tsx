import LayoutHeader from "./header";
import LayoutBanner from "./banner";
// import LayoutNavigation from "./navigation";
import { useRouter } from "next/router";
import LayoutAside from "./aside";

const HIDDEN_HEADERS = ["/main", "/main/join", "/main/login"];
const HIDDEN_BANNER = ["/main", "/main/join", "/main/login"];
const HIDDEN_ASIDE = ["/main", "/main/join", "/main/login"];
// const HIDDEN_NAVIGATION = [""];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenAside = HIDDEN_ASIDE.includes(router.asPath);
  // const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  return (
    <>
      {!isHiddenAside && <LayoutAside />}
      {/* {!isHiddenNavigation && <LayoutNavigation />} */}
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      <div>{props.children}</div>
    </>
  );
}

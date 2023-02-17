import LayoutHeader from "./header";
import LayoutBanner from "./banner";
// import LayoutNavigation from "./navigation";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = ["/main", "/main/signIn", "/main/signUp"];
const HIDDEN_BANNER = ["/main", "/main/signIn", "/main/signUp"];
// const HIDDEN_NAVIGATION = [""];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  // const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  return (
    <>
      {/* {!isHiddenNavigation && <LayoutNavigation />} */}
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      <div>{props.children}</div>
    </>
  );
}

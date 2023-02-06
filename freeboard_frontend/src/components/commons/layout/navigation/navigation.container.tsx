import { useState } from "react";
import LayoutNavigationUI from "./navigation.presenter";

export default function LayoutNavigationContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = (toggled) => {
    setIsOpen(toggled);
    console.log(isOpen);
  };
  return (
    <LayoutNavigationUI
      isOpen={isOpen}
      setOpen={setIsOpen}
      toggleSide={toggleSide}
    />
  );
}

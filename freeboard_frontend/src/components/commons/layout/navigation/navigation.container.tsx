import { useState } from "react";
import LayoutNavigationUI from "./navigation.presenter";

export default function LayoutNavigationContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = (toggled: boolean) => {
    setIsOpen(toggled);
  };
  return (
    <LayoutNavigationUI
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      toggleSide={toggleSide}
    />
  );
}

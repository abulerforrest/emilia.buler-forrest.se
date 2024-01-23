import { useEffect } from "react";

interface UseCloseMenuOnEscProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

export function useCloseMenuOnEsc({
  showMenu,
  toggleMenu,
}: UseCloseMenuOnEscProps) {
  useEffect(() => {
    if (!showMenu) {
      return;
    }

    function keyDownHandler(e: globalThis.KeyboardEvent) {
      if (showMenu && e.key === "Escape") {
        e.preventDefault();
        toggleMenu();
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [showMenu]);
}

import { useEffect } from "react";
import { keyPadKeys } from "../../data/KeyPadKeys";

export default function useKeydownEventListener({ onKeyHandler }: { onKeyHandler: (val: string) => void }) {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const key = keyPadKeys.find((key) => key.keyboardEventCode === event.key);
      if (key) {
        onKeyHandler(key.value);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onKeyHandler]);
}

export interface keyPadKey {
  value: string;
  keyboardEventCode: string | null;
  label: string;
}

export const keyPadKeys: keyPadKey[] = [
  { label: "<", keyboardEventCode: "ArrowLeft", value: "<" },
  { label: ">", keyboardEventCode: "ArrowRight", value: ">" },
  { label: "(", keyboardEventCode: "(", value: "(" },
  { label: ")", keyboardEventCode: ")", value: ")" },
  { label: "7", keyboardEventCode: "7", value: "7" },
  { label: "8", keyboardEventCode: "8", value: "8" },
  { label: "9", keyboardEventCode: "9", value: "9" },
  { label: "/", keyboardEventCode: "/", value: "/" },
  { label: "4", keyboardEventCode: "4", value: "4" },
  { label: "5", keyboardEventCode: "5", value: "5" },
  { label: "6", keyboardEventCode: "6", value: "6" },
  { label: "*", keyboardEventCode: "*", value: "*" },
  { label: "1", keyboardEventCode: "1", value: "1" },
  { label: "2", keyboardEventCode: "2", value: "2" },
  { label: "3", keyboardEventCode: "3", value: "3" },
  { label: "-", keyboardEventCode: "-", value: "-" },
  { label: "0", keyboardEventCode: "0", value: "0" },
  { label: ".", keyboardEventCode: ".", value: "." },
  { label: "Del", keyboardEventCode: "Backspace", value: "Del" },
  { label: "+", keyboardEventCode: "+", value: "+" },
];

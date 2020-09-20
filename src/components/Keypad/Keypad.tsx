import React from "react";
import { keyPadKey } from "../../data/KeyPadKeys";
import Button from "../Button/Button";
import "./Keypad.css";

export default function Keypad({ keyPadKeys, clickHandler }: { keyPadKeys: keyPadKey[]; clickHandler: (val: string) => void }) {
  const buttons = keyPadKeys.map((key) => <Button key={key.label} label={key.label} clickHandler={() => clickHandler(key.value)}></Button>);

  return <div className="keypad">{buttons}</div>;
}

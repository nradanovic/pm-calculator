import React from "react";

export default function Button({ label, clickHandler }: { label: string; clickHandler: () => void }) {
  return <button onClick={clickHandler}>{label}</button>;
}

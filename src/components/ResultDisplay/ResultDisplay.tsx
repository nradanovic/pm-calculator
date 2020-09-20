import React from "react";
import "./ResultDisplay.css";

export default function ResultDisplay({ result }: { result: string }) {
  return <div className="resultDisplay">= {result}</div>;
}

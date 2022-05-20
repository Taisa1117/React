import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const Markdown = () => {
  const [text, setText] = useState("");

  const styleM = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={styleM}>
      <Editor setText={setText} />
      <Preview text={text} />
    </div>
  );
};
export default Markdown;

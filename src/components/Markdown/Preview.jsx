import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
const Preview = (props) => {
  const [preview, setPreview] = useState("");
  console.log("p");
  //  呼ばれたらMarkdownにするエディターで呼ばれた時のみ実行
  useEffect(() => {
    setPreview(props.text);
  }, [props.text]);

  const styleMarkdown = {
    border: "1px solid red",
    width: "60%",
  };
  return (
    <div style={styleMarkdown} id="preview">
      <ReactMarkdown>{preview}</ReactMarkdown>
    </div>
  );
};
export default Preview;

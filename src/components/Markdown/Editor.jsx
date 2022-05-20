import { useEffect, useState } from "react";

const Editor = (props) => {
  const initialEditor = `# Markdown形式で書かれた文書をHTMLに変換できます
---
## ここのテキストエリアに書いてみてください
[Markdownの記法](https://qiita.com/tbpgr/items/989c6badefff69377da7)をプレビューとともに確認することができます。

`;
  const [editor, setEditor] = useState(initialEditor);

  const changeEditor = (e) => {
    console.log("ce");
    setEditor(e.target.value);
    props.setText(editor);
  };
  useEffect(() => {
    props.setText(editor);
  });

  return (
    <div>
      <textarea
        name="editor"
        id="editor"
        value={editor}
        onChange={(e) => changeEditor(e)}
        cols="80"
        rows={20}
      ></textarea>
    </div>
  );
};
export default Editor;

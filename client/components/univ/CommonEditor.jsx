import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
// TOAST UI Editor
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";
const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((m) => m.Editor),
  { ssr: false }
);
// TOAST UI Editor Plugins
// import "tui-chart/dist/tui-chart.css";
// import chart from "@toast-ui/editor-plugin-chart";
// import "highlight.js/styles/github.css";
// import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
// import "tui-color-picker/dist/tui-color-picker.css";
// import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
// import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
// import uml from "@toast-ui/editor-plugin-uml";
import ForwardedRefEditor from "./ForwardedRefEditor";

const CommonEditor = () => {
  // const [test, setTest] = useState("");
  const editorRef = useRef();
  // const editorInstance = editorRef.current.getInstance();
  // const clickHandler = () => {
  //   setTest(editorInstance.getHtml());
  // };
  useEffect(() => {
    // editorInstance.setHtml(test);
    console.log(editorRef.current);
  });

  return (
    <div className="z-20 h-120 bg-white">
      <Editor
        previewStyle="vertical"
        height="500px"
        initialEditType="markdown"
        usageStatistics={false}
        // plugins={[
        //   chart,
        //   codeSyntaxHighlight,
        //   colorSyntax,
        //   tableMergedCell,
        //   uml,
        // ]}
        ref={editorRef}
      />
      <button onClick={undefined}>save</button>
      <button onClick={undefined}>load</button>
    </div>
  );
};

export default CommonEditor;

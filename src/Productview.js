import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw } from "draft-js";

const ProductDescriptionViewer = ({ rawContent }) => {
  // Parse the raw content string and convert it to EditorState
  const editorState = rawContent
    ? EditorState.createWithContent(convertFromRaw(rawContent))
    : EditorState.createEmpty();

  return (
    <div
      style={{
        border: "1px solid #f1f1f1",
        padding: "10px",
        minHeight: "100px",
        backgroundColor: "white",
        borderRadius: "4px",
      }}
    >
      <Editor
        editorState={editorState}
        toolbarHidden
        readOnly
        editorClassName="read-only-editor"
      />
    </div>
  );
};

export default ProductDescriptionViewer;

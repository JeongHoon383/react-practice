import React, { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }; // 엔터키 누르면 버튼이 실행되는 함수

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeyDown}
        ref={inputRef}
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        value={content}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;

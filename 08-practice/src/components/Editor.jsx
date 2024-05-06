import React, { useRef, useState } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
      alert("추가 되었습니다.");
    }
  };

  return (
    <div className="flex gap-[10px]">
      <input
        onKeyDown={onKeyDown}
        ref={contentRef}
        onChange={onChangeContent}
        value={content}
        placeholder="새로운 Todo..."
        className="flex-1 p-[10px] border-[1px] border-solid border-gray-400 rounded-[5px]"
      />
      <button
        onClick={onSubmit}
        className="w-[80px] bg-lime-300 border-none rounded-[5px] text-white cursor-pointer"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;

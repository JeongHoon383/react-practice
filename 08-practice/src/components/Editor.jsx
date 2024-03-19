import React, { useRef, useState } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onkeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickChange();
    }
  };

  const onClickChange = () => {
    if (content === "") {
      alert("값을 입력 해주세요");
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    alert("추가 되었습니다.");
    setContent("");
  };

  return (
    <div className="flex gap-[10px]">
      <input
        onKeyDown={onkeyDown}
        value={content}
        onChange={onChangeContent}
        ref={contentRef}
        placeholder="새로운 Todo..."
        className="flex-1 p-[10px] border-[1px] border-solid border-gray-400 rounded-[5px]"
      />
      <button
        onClick={onClickChange}
        className="w-[80px] bg-lime-300 border-none rounded-[5px] text-white cursor-pointer"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;

import React from "react";

const Editor = () => {
  return (
    <div className="flex gap-[10px]">
      <input
        placeholder="새로운 Todo..."
        className="flex-1 p-[10px] border-[1px] border-solid border-gray-400 rounded-[5px]"
      />
      <button className="w-[80px] bg-lime-300 border-none rounded-[5px] text-white cursor-pointer">
        추가
      </button>
    </div>
  );
};

export default Editor;

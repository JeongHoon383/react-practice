import React from "react";

const ListItem = ({ id, isDone, content, date }) => {
  return (
    <div className="flex gap-[20px] pb-[20px] border-b border-gray-400">
      <input type="checkbox" readOnly checked={isDone} />
      <div className="flex-1">{content}</div>
      <div className="text-red-300">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default ListItem;

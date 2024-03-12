import React from "react";

const ListItem = () => {
  return (
    <div className="flex gap-[20px] pb-[20px] border-b border-gray-400">
      <input type="checkbox" />
      <div className="flex-1">Todo..</div>
      <div className="text-red-300">Date</div>
      <div>삭제</div>
    </div>
  );
};

export default ListItem;

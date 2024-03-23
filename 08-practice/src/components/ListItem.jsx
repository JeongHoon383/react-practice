import React from "react";

const ListItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  return (
    <div className="flex gap-[20px] pb-[20px] border-b border-gray-400">
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="flex-1">{content}</div>
      <div className="text-red-300">{new Date(date).toLocaleDateString()}</div>
      <div>삭제</div>
    </div>
  );
};

export default ListItem;

import React from "react";

const ListItem = ({ id, isDone, content, date, onDelete, onUpdate }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="flex gap-[20px] pb-[20px] border-b border-gray-400">
      <input
        type="checkbox"
        readOnly
        checked={isDone}
        onChange={onChangeCheckBox}
      />
      <div className="flex-1">{content}</div>
      <div className="text-red-300">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default ListItem;

import React from "react";
import ListItem from "./ListItem";

const List = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h3>Todo List🥩</h3>
      <input
        placeholder="검색어를 입력하세요."
        className="border-0 border-b border-gray-400 outline-none focus:border-blue-400 w-full py-[10px]"
      />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default List;

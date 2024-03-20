import React, { useState } from "react";
import ListItem from "./ListItem";

const List = ({ todos }) => {
  // 검색어를 입력했을 때 listitem에 컨텐츠가 나오게
  // 빈 검색어일때 content가 출력되게
  // content에 값과 일치했을 때 해당 content가 나올 수 있게

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterSearch = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredSearch = getFilterSearch();

  return (
    <div className="flex flex-col gap-[20px]">
      <h3>Todo List🥩</h3>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
        className="border-0 border-b border-gray-400 outline-none focus:border-blue-400 w-full py-[10px]"
      />
      {filteredSearch.map((todo) => {
        return <ListItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default List;

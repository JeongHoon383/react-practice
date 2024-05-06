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

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.includes(search));
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="flex flex-col gap-[20px]">
      <h3>Todo List🥩</h3>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
        className="border-0 border-b border-gray-400 outline-none focus:border-blue-400 w-full py-[10px]"
      />
      {filteredTodos.map((todo) => {
        return <ListItem key={todo.id} {...todo} />;
        // 리액트에서는 내부적으로 list 형태로 랜더링시 모든 아이템 컴포넌트에 key prop을 부여해줘야 함
      })}
    </div>
  );
};

export default List;

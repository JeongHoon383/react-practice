import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useState } from "react";

// input에 추가 버튼을 눌렀을 때 input 값이 넘어가게
// 추가 버튼을 눌렀을 때 input에 focus가 되게
// 추가 버튼을 눌렀을 때 input안에 값이 초기화가 되게
// 엔터키를 눌렀을 때 추가 버튼이 클릭되게

// todo 아이템 추가하기 순서
// 1. editor 컴포넌트에서 받아온 데이터를 useState에 저장
//

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "todo 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockData);

  const onCreate = (content) => {
    const newTodo = {
      id: 1,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodo([newTodo, ...todo]);
  };

  return (
    <div className="flex flex-col w-[500px] m-auto gap-[20px] mt-[20px]">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;

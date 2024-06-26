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
// 1. todo 생성
// 2. 검색 기능
// 3. 생성시 엔터키 눌렀을때 생성
// 4. 중복 허용 x

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "해위 난 정훈",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "해위 난 정훈정훈",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="flex flex-col w-[500px] m-auto gap-[20px] mt-[20px]">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

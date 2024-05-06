import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useState } from "react";

// 구현해야 할 기능
// 1. todo 생성
// 2. todo 수정
// 3. todo 삭제
// 4. todo 검색
// 5. todo 체크
// 6. todo 삭제

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

// todo 생성하기 순서
// 1. 추가된 데이터를 담을 수 있는 state 생성
// 2. 데이터를 담게 해주는 이벤트 핸들러 생성, mockData와 같은 형태로 담겨야됨
// 3. 받아온 데이터를 todos에 담아주기
// 4. editor 컴포넌트에 onCreate 함수를 전달
// 5. editor 컴포넌트 : editor 컴포넌트에서 버튼을 클릭했을 때 함수가 실행
// 6. editor 컴포넌트 : input에 담긴 값을 state에 담아줌
// 7. editor 컴포넌트 : 담긴 state를 버튼 이벤트 핸들러에 전달해줌
// 8. 새로 만들어진 todos id값을 다 다르게 만들어 주기
// 9. input에 입력값이 없을때 추가가 안되게 그리고 input값에 focus가 되게
// 10. 추가 버튼을 눌렀을 때 input 안에 있는 값이 비워지게
// 11. input 폼에서 엔터를 눌렀을 때 추가가 되게

// 생성한 todo 화면에 랜더링 하기
// state에 있는 todos를 list 컴포넌트에 props로 전달
// Todoitem으로 props 전달 map 함수 사용
// 검색어 기능 구현 : 검색어를 담는 state 및 이벤트 핸들러 생성
// 검색어 구현 함수 생성
//

// todo 수정하기
// 렌더링된 todo item 체크박스 클릭시 isDone 이 true로 되게 토글기능 구현
//

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    // editor 컴포넌트에서 받아오는 데이터를 받아야 되기 때문에 매개변수 content를 만들어줌
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // todos.push - 이렇게 하면 안됨 why? state 함수 todos는 setTodos로 바꿔줘야 리액트에서 감지할 수 있음
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone을 변경
    // 어떤 item을 선택하는지 알려줘야됨, id 값으로 설정

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  // () => {} 화살표 함수 사용시 주의할 점
  // ()

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetID와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

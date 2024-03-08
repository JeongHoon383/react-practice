// 리액트의 컴포넌트들은 3가지 상황에서 리랜더링 된다.
// 1. state값이 변경 되었을 때
// 2. props의 값이 변경 되었을 때
// 3. 부모 컴포넌트가 변경 되었을 때
import "./App.css";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  return (
    <>
      <Register />
      <HookExam />
    </>
  );
}

export default App;

// root 파일 최상위 파일

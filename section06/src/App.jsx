import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";
// 부모 컴포넌트에 useState를 생성 why? props로 값을  전달 해야되는데 부모 -> 자식인 경우에만 가능, 자식 간 값 전달 x
// react.js의 데이터 흐름은 위에서 아래로 이루어짐 = 단방향 데이터 흐름

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;

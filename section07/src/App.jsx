import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useEffect, useRef, useState } from "react";
// 부모 컴포넌트에 useState를 생성 why? props로 값을  전달 해야되는데 부모 -> 자식인 경우에만 가능, 자식 간 값 전달 x
// react.js의 데이터 흐름은 위에서 아래로 이루어짐 = 단방향 데이터 흐름

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false); // 값이 업데이트 될 때만 값이 변경되게 useRef를 사용하여 최초 랜더링시 mount 값만 나오게 함

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);
  // 2. 업데이트 : 변화, 리랜더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 3. 언마운트 : 죽음
  // class 컴포넌트에서 사용하는 컴포너트 생명주기의 특징을 함수형 컴포넌트에서도 사용 할 수 있음.

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;

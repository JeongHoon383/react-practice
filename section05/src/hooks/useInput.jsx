import { useState } from "react";

function useInput() {
  // 커스텀 훅을 만들려면 함수명 앞에 "use"를 붙여주면 됨
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  return [input, inputChange];
} // 커스텀 훅을 사용하는 이유 : 반복되는 리액트 훅을 함수로 처리해서 코드를 간결하게 함.

export default useInput;

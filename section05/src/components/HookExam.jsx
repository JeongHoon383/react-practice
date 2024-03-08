// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅(custom hook)을 직접 만들 수 있다.

import React from "react";
import useInput from "../hooks/useInput";

// const state = useState(); 호출 불가

const HookExam = () => {
  const [input, inputChange] = useInput();

  // if (true) {
  //   const state = useState();
  // }
  // 사용 불가

  return (
    <div>
      <input value={input} onChange={inputChange} type="text" />
    </div>
  );
};

export default HookExam;

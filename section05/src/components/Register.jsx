import React, { useRef, useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// let count = 0 이 방법으로 하면 useRef를 굳이 안써도 되지 않나?
// 안됨 why? 만약 Register 컴포넌트를 여러곳에서 사용한다면 공용으로 변수를 사용하게됨
// countRef를 사용한 이유는 각 컴포넌트 별로 useState값의 변동 횟수를 알아보는건데
// 변수를 공유하게 되면 각각이 아닌 모든 컴포넌트에서 변경될 때마다 수치가 올라가서 개별적으로 파악할 수가 없음
// 추가로 컴포넌트 바깥에 변수를 생성하는 건 좋지 않음

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // let count = 0; 이렇게 쓰게 되면 리렌더링 되면서 값이 초기화됨

  // useRef 사용 사례
  // 1. state값이 변경될 때 마다 count가 올라가게 처리, 변동 횟수를 파악할 수 있음
  // 2.

  const onChange = (e) => {
    countRef.current++;
    // count++;
    console.log(countRef.current);
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      // 왜 배열안에 넣었을까? :
    });
  }; // 통합 이벤트 핸들러 함수

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  // 상태를 변경하려면 useState가 필요
  // input에 값을 변경한다. useState -> input 안의 값은 동적으로 움직임 -> 값이 움직이도록 하는 함수를 만들어줌 -> 그 값을 useState에 저장, 저장된 useState 값 input 에도 저장 value 속성 사용
  // input 태그 생성 -> useState 생성 -> input에 이벤트 핸들러 작성 -> 이벤트 핸들러 함수 작성 -> 함수 값 state 값에 저장 -> 저장 한 state 값 value 속성을 사용하여 동적으로 처리
  return (
    <div>
      <div>
        <input
          ref={inputRef} // input 태그의 값을 useRef에 저장
          name="name"
          value={input.name} // input 태그에서 value 값은 초기값
          onChange={onChange} // 이벤트핸들러 : 이벤트가 발생하는 것을 처리해주는 함수, onChange를 사용하여 useState 값을 저장해줌
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth} // 밑으로 내리기
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="EU">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
          cols="30"
          rows="10"
        ></textarea>
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;

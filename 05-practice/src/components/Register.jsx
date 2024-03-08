import React, { useRef, useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    date: "",
    country: "",
    text: "",
  });

  const countRef = useRef(0); // state 값이 변할 때 마다 카운트가 올라가게
  const inputRef = useRef(); // name input값을 inputRef에 저장

  const change = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // 제출 버튼을 눌렀을 때 이름 input에 포커스가 되게
  // 이름 input 정보를 가져와야 됨
  const submit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          placeholder="이름"
          name="name"
          value={input.name}
          onChange={change}
          type="text"
        />
      </div>
      {input.name}
      <div>
        <input name="date" value={input.date} onChange={change} type="date" />
      </div>
      {input.date}
      <div>
        <select name="country" value={input.country} onChange={change}>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="EU">영국</option>
        </select>
      </div>
      {input.country}
      <div>
        <textarea
          name="text"
          value={input.text}
          onChange={change}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      {input.text}
      <button onClick={submit}>제출</button>
    </div>
  );
};

export default Register;

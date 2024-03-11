import React from "react";

const Header = () => {
  return (
    <div>
      <h3>오늘은 📮</h3>
      <h1 className="text-cyan-500">{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;

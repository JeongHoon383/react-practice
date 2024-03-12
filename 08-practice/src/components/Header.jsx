import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h3 className="text-xl font-bold">오늘은 📮</h3>
      <h1 className="text-cyan-500 text-3xl font-bold">
        {new Date().toDateString()}
      </h1>
    </div>
  );
};

export default Header;

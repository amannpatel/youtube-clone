import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <img
          className="h-8 mx-5"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-9 px-10">
        <input
          className="w-1/2 border rounded-l-full border-gray-400 p-2"
          type="text"
          placeholder="🔍 Search"
        />
        <button className="border border-l-0 border-gray-400 rounded-r-full px-5 py-2 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bEHaPRRyd-0qMNsPnsDsH4vmmVZReSZ95-G-TaKnog&s"
          alt="bell"
        />
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyzTkEY3Uui9Tnb6aL9XX36iYGrQ_Fiy1KEn98K9ndNPXQCN5t7Tgr-7gl4szcWlhnzU&usqp=CAU"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;

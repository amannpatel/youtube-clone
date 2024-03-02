import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="font-bold">Home</li>
        <li className="font-bold">Shorts</li>
        <li className="font-bold">Videos</li>
        <li className="font-bold">Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;

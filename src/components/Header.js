import React, { useState, useEffect } from "react";
import "./Header.css";
import "./Card";
import Card from "./Card";
import WelcomePage from "./WelcomePage";
export const Header = () => {
  const [clickk, setClickk] = useState(false);
  function func(){
    setClickk(true);
  }
  return (
    <>
      <nav className="header">
        <ul>
          <li onClick={null}>Home</li>
          <li  onClick={func} >Get Users</li>
        </ul>
      </nav>
      {clickk ? <Card/>: <h3><WelcomePage/></h3>}
      
    </>
  );
};

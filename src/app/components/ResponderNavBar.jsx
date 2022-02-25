import { Menu } from "antd";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../../App.css";

const ResponderNavBar = () => {
  return (
    <Menu className="responderNavBar" mode="horizontal">
      <Menu.Item style={{fontWeight:"bold", pointerEvents:"none"}} key="company">
        <a style={{fontWeight:"bold", pointerEvents:"none"}} href="/" className="responderNavBarItem">
          The Responder Helpers
        </a>
      </Menu.Item>
      <Menu.Item key="home">
        <a href="/" className="responderNavBarItem">
          Home
        </a>
      </Menu.Item>
      <Menu.Item key="profiles">
        <a href="/profiles" className="responderNavBarItem">
          Profiles
        </a>
      </Menu.Item>
      <Menu.Item key="about">
        <a href="/about" className="responderNavBarItem">
          About
        </a>
      </Menu.Item>
    </Menu>
  );
};
export default ResponderNavBar;

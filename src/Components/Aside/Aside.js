import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Aside = () => {
  return (
    <>
      <aside>
        <Link to="/">Home</Link>
        <h2>Mateus henrique</h2>
        <p>test</p>
      </aside>
    </>
  );
};

export default Aside;

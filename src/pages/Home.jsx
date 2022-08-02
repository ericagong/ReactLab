import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      Home
      <Link to='/About'>About가기</Link>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
const About = (props) => {
  return (
    <div>
      About
      <Link to='/'>Home 가기</Link>
      <a href='/'>Refresh되는 Home 가기</a>
    </div>
  );
};

export default About;

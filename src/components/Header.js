import React from "react"; //so we can use react
// making the header component
const Header = (props) => { 
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
// here is the styleeee
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};
// this is a functional component

export default Header;

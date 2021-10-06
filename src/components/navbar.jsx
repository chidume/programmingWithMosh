import React from 'react';
import '../styles/index.css';

function NavBar(props) {
  console.log('NavBar - Rendered');

  return (
    <div className={"navbar"}>
      Navbar{" "}
      <span className="badge">{props.totalCounters}</span>
    </div>
  );
}

export default NavBar;
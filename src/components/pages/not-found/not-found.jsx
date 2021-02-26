import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";

const LinkStyle = {
  display: `flex`,
  justifyContent: `center`,
  padding: `10px`,
  border: `1px solid black`,
  borderRadius: `10px`
};

const NotFound = () => {

  return (
    <div style={{margin: `0 auto`}}>
      <h1>404 Not Found</h1>
      <Link to={`${AppRoute.MAIN}`} style={LinkStyle}>
        Back to main page
      </Link>
    </div>
  );
};

export default NotFound;

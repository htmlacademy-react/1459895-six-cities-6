import React from "react";
import Header from "../../header/header";

import "./not-found.css";

const NotFound = () => {

  return (
    <div className="page">
      <Header/>
      <main className="page__main">
        <div className="container">
          <h1 className="not-found">404 Not Found</h1>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

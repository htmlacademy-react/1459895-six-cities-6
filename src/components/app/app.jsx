import React from 'react';
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";

const App = (props) => {
  const {rentPlacesCount, cards} = props;

  return (
    <MainPage
      rentPlacesCount={rentPlacesCount}
      cards={cards}/>
  );
};

App.propTypes = {
  rentPlacesCount: PropTypes.number.isRequired,
  cards: PropTypes.array
};

export default App;

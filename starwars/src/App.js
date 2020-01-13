import React from "react";
import "./App.css";
import StarWarsPeople from "./components/StarWarsPeople";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <hr />
      <h5 className="AnnouncementText">
        Press each button below to toggle character data
      </h5>
      <div className="PeopleCard">
        <StarWarsPeople />
      </div>
    </div>
  );
};

export default App;

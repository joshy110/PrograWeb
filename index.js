import React from "react";
import ReactDOM from "react-dom";

import "css/estilos.css";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Joshy",
  lastName: "Cabrera"
};

function App() {
  return (
    <div className="App">
      <h1>Hello {formatName(user)}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
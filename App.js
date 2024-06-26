import React from "react";
import ReactDOM from "react-dom/client"


const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading"
  );

  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);
import React from "react";
import ReactDOM from "react-dom/client"


const Title = () => (
  <h1 id="title">Head</h1>
)
  const HeaderComponent = () => {
    return(
      <div>
        <Title />
        <h1>Header Component</h1>
      </div>

    )
  }
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<HeaderComponent />);
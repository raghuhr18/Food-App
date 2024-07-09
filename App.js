import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./src/components/Body";
import Head from "./src/components/Head";
import Footer from "./src/components/Footer";


  const Applayout = () => {
    return(
    <>
      <Head/>
      <Body />
      <Footer />
    </>
    )
  }
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<Applayout />);
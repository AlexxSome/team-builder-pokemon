import Navbar from "./components/common/navbar/Navbar";
import React from "react";


function App({children}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default App;


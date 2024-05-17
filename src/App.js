import Navbar from "./components/common/navbar/Navbar";
import Drawer from "./components/common/drawer/Drawer";
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


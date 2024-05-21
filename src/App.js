import Navbar from "./components/common/navbar/Navbar";
import React, {Children, cloneElement, useState} from "react";
import DrawerTeam from "./components/common/drawer/Drawer";


function App({children}) {
    const [stateDrawer, setStateDrawer] = useState(false);

  return (
    <>
      <Navbar stateDrawer={stateDrawer} setStateDrawer={setStateDrawer}/>
      <DrawerTeam stateDrawer={stateDrawer} setStateDrawer={setStateDrawer}/>
      {children}
    </>
  );
}

export default App;


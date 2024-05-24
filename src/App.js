import Navbar from "./components/common/navbar/Navbar";
import React, {Children, cloneElement, isValidElement, useState} from "react";
import DrawerTeam from "./components/common/drawer/Drawer";
import DrawerContext from "./context/DrawerContext";


function App({children}) {
    const [stateDrawer, setStateDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{stateDrawer, setStateDrawer}}>
      <Navbar stateDrawer={stateDrawer} setStateDrawer={setStateDrawer}/>
      <DrawerTeam stateDrawer={stateDrawer} setStateDrawer={setStateDrawer}/>
      {children}
    </DrawerContext.Provider>
  );
}

export default App;


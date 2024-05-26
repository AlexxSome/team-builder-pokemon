import Navbar from "./components/common/navbar/Navbar";
import React, {useState} from "react";
import DrawerTeam from "./components/common/drawer/Drawer";
import DrawerContext from "./context/DrawerContext";
import ConfirmationModal from "./components/common/confirmationModal/ConfirmationModal";


function App({children}) {
    const [stateDrawer, setStateDrawer] = useState(false);
    const [openConfirmation, setOpenConfirmation] = useState(false);
  return (
    <DrawerContext.Provider value={{stateDrawer, setStateDrawer}}>
        <Navbar stateDrawer={stateDrawer} setStateDrawer={setStateDrawer}/>
        <DrawerTeam stateDrawer={stateDrawer} setStateDrawer={setStateDrawer} setOpenConfirmation={setOpenConfirmation}/>
        <ConfirmationModal openConfirmation={openConfirmation} setOpenConfirmation={setOpenConfirmation}/>
        {children}
    </DrawerContext.Provider>
  );
}

export default App;


import { createContext, useContext } from 'react';

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export default DrawerContext;
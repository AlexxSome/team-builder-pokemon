import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import {CgPokemon} from "react-icons/cg";

const DrawerTeam = ({team = ["test"], setStateDrawer, stateDrawer}) => {

    const handleCloseDrawer = ()=>{
        console.log("CLICK")
        setStateDrawer(!stateDrawer);
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={handleCloseDrawer}>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <CgPokemon /> : <CgPokemon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (

        <div>
            <Button onClick={handleCloseDrawer}>Open drawer</Button>
            <Drawer open={stateDrawer} onClose={handleCloseDrawer} >
                {DrawerList}
            </Drawer>
        </div>

    );
};

export default DrawerTeam;
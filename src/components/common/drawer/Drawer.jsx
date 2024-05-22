import React, {useContext, useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem, ListItemAvatar,
    ListItemButton,
    ListItemText
} from "@mui/material";

import {AppContext} from "../../../context/ContextProvider";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const DrawerTeam = ({setStateDrawer, stateDrawer}) => {

    const {updateTeamCart, state} = useContext(AppContext);

    const [teamCart, setTeamCart] = useState([]);

    useEffect(() => {
    }, [teamCart]);

    useEffect(() => {
        const db = getFirestore();
        const teamCartList = collection(db, "team-cart");

        getDocs(teamCartList).then((data) => {
            setTeamCart( data.docs.map((doc) => doc.data()))
        })
    }, []);


    const handleCloseDrawer = ()=>{
        setStateDrawer(!stateDrawer);
    }

    const handleClearList = ()=>{
        updateTeamCart([]);
        setTeamCart([]);
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {teamCart.map((poke) => (
                    <ListItem key={poke.id} >
                        <ListItemAvatar>
                            <Avatar alt="image pokemon" src={poke.imgUrl} />
                        </ListItemAvatar>
                        <ListItemButton>
                            <ListItemText primary={poke.name.toUpperCase()} />
                        </ListItemButton>
                        <Divider />
                    </ListItem>

                ))}
            </List>
            <Divider />
            <List disablePadding>

                <ListItem disablePadding>
                    <ListItemButton>
                        <Button color="success" variant="outlined" fullWidth>Save Single Team</Button>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Button color="success" variant="outlined" fullWidth>Save Double Team</Button>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Button color="warning" variant="outlined" fullWidth onClick={handleClearList}>Clear List</Button>
                    </ListItemButton>
                </ListItem>
            </List>


        </Box>
    );

    return (

        <div>
            <Drawer anchor='right' open={stateDrawer} onClose={handleCloseDrawer} >
                {DrawerList}
            </Drawer>
        </div>

    );
};

export default DrawerTeam;
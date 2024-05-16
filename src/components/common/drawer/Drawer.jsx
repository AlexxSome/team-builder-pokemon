import React, {useState} from 'react';
import {Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import teamImg from "../../../assets/img/primeragen.jpg"

const Drawer = ({team=["test"]}) => {
    const [open, setOpen] = useState(true);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={toggleDrawer(false)}
        >
        <Box sx={{ width: 250 }} role="presentation" >
            <List>
                {team.map((text, i) => (
                    <ListItem key={i} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar alt="Remy Sharp" src={teamImg} />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                        <Divider />
                    </ListItem>
                ))}
            </List>

        </Box>
        </Drawer>
    );
};

export default Drawer;
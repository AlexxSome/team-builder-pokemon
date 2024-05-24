import React, {useContext, useEffect, useState} from 'react';
import {Badge, Button, Stack} from "@mui/material";
import {CgPokemon} from "react-icons/cg";
import {AppContext} from "../../context/ContextProvider";

const TeamIcon = ({setStateDrawer, stateDrawer}) => {
    const[countTeam, setCountTeam] = useState(0);
    const {state} = useContext(AppContext);

    useEffect(() => {
        setCountTeam(state.teamCart.length)
    }, [state]);

    const handleDrawer = ()=>{
        setStateDrawer(!stateDrawer);
    }

    return (
        <Badge badgeContent={countTeam} color="warning" overlap="circular">
            <Button
                onClick={handleDrawer}
                variant="contained"
                sx={{
                    borderRadius: 20,
                    backgroundColor: '#ffcb05',
                    color:"#005baa",
                    '&:hover': {
                        color: '#ffcb05',
                        backgroundColor: '#005baa',
                        border: 'solid 2px #ffcb05'
                    },
            }}
            >
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <CgPokemon fontSize="large"/>
                    <CgPokemon fontSize="large"/>
                    <CgPokemon fontSize="large"/>
                </Stack>
            </Button>
        </Badge>
    );
};

export default TeamIcon;
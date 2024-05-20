import React from 'react';
import {Button, Stack} from "@mui/material";
import {CgPokemon} from "react-icons/cg";

const TeamIcon = ({setStateDrawer, stateDrawer}) => {

    const handleDrawer = ()=>{
        setStateDrawer(!stateDrawer);
    }

    return (
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
    );
};

export default TeamIcon;
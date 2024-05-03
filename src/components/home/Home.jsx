import React from 'react';
import {Container, Grid, InputAdornment, TextField} from "@mui/material";
import {MdOutlineSearch} from "react-icons/md";
import PokeInfo from "../common/pokeInfo/PokeInfo";

const MyComponent = () => {

    return (
        <Container sx={{mt:2}}>
            <TextField
                id="filled-basic"
                label="Search Pokemon"
                variant="filled"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <MdOutlineSearch size={30} />
                        </InputAdornment>
                    ),
                }}
            />

            <Grid container spacing={2} >
                <Grid item>
                    <PokeInfo />
                </Grid>
                <Grid item>
                    <PokeInfo />
                </Grid>
                <Grid item>
                    <PokeInfo />
                </Grid>
                <Grid item>
                    <PokeInfo />
                </Grid>
                <Grid item>
                    <PokeInfo />
                </Grid>
                <Grid item>
                    <PokeInfo />
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyComponent;

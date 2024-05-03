import React, {useEffect, useMemo, useState} from 'react';
import {Container, Grid, InputAdornment, TextField} from "@mui/material";
import {MdOutlineSearch} from "react-icons/md";
import PokeInfo from "../common/pokeInfo/PokeInfo";
import {getFirstGeneration} from "../../services/pokemonService";

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useMemo(() => {
        const fetchData = async () => {
            try {
                const list = await getFirstGeneration();
                setPokemonList(list.results);
            } catch (error) {
                console.error("Get List pokemon: ", error)
            }
        };
        fetchData().then( );
    }, []);

    useEffect(() => {
        console.log("Data: ",pokemonList)
    }, [pokemonList]);

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
                {pokemonList?.map((pokemon, index)=>{
                    return (
                        <Grid item key={index}>
                            <PokeInfo pokemon={pokemon}/>
                        </Grid>
                    )
                })}

            </Grid>
        </Container>
    );
};

export default Home;

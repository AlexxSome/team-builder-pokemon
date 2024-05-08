import React, {useEffect, useMemo, useState} from 'react';
import {Backdrop, CircularProgress, Container, Grid, InputAdornment, TextField} from "@mui/material";
import {MdOutlineSearch} from "react-icons/md";
import PokeInfo from "../common/pokeInfo/PokeInfo";
import {getDetailPokemon, getFirstGeneration} from "../../services/pokemonService";

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
    const [responseDetail, setResponseDetail] = useState([]);

    useEffect(() => {

    }, [pokemonList]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        handleOpen();
        try {
            await getFirstGeneration().then((data) => {
                setPokemonList(data);
                Promise.all(
                    data.results.map(poke => fetch(poke.url).then(response => response.json()))
                ).then((response)=>{
                    setResponseDetail(response);
                    handleClose();
                });
            });

        } catch (error) {
            console.error("Get List pokemon: ", error);
        }
    };

    const fetchDetail = async ()=> {
        try {
            pokemonList.length > 0 && pokemonList.map(pokemon => getDetailPokemon(pokemon.url)
                .then(data => responseDetail.push(data))
                .catch(error => console.error('Error al realizar fetch:', error))
            )
        } catch (error) {
            console.error("Get List pokemon: ", error);
        }
    }

    const handleClose = () => {
        setOpenBackdrop(false);
    };
    const handleOpen = () => {
        setOpenBackdrop(true);
    };

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
                {responseDetail && responseDetail.map((pokemon, index)=>{
                    return (
                        <Grid xs={12} sm={6} md={3} item key={index}>
                            <PokeInfo pokemon={pokemon}/>
                        </Grid>
                    )
                })}

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={openBackdrop}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Grid>
        </Container>
    );
};

export default Home;

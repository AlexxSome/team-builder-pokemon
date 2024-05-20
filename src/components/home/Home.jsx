import React, {useEffect, useState} from 'react';
import {Backdrop, CircularProgress, Container, Grid, InputAdornment, TextField} from "@mui/material";
import {MdOutlineSearch} from "react-icons/md";
import PokeInfo from "../common/pokeInfo/PokeInfo";
import {getDetailPokemon, getFirstGeneration} from "../../services/pokemonService";
import DetailModal from "../common/pokeInfo/DetailModal";
import DrawerTeam from "../common/drawer/Drawer";

const Home = ({stateDrawer, setStateDrawer}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState();
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
    const [responseDetail, setResponseDetail] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (poke) => {
        setPokemonSelected(poke)
        setOpenModal(true);
    };
    useEffect(() => {
    }, [pokemonList]);

    useEffect(() => {
        fetchData().then(r => r)
    }, []);

    const fetchData = async () => {
        handleOpen();
        try {
            await getFirstGeneration().then((data) => {
                setPokemonList(data);
                Promise.all(
                    data.results.map(poke => getDetailPokemon(poke.url))
                ).then((response)=>{
                    setResponseDetail(response);
                    setFilterList(response);
                    handleClose();
                });
            });

        } catch (error) {
            console.error("Get List pokemon: ", error);
        }
    };

    const searchPokemon = (text)=> {
        const filter = filterList.filter(item => item.name.toLowerCase().includes(text.target.value.toLowerCase()));
        setResponseDetail(filter);
    }

    const handleOpenCloseModal = () => setOpenModal(!openModal);

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
                onKeyUp={searchPokemon}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <MdOutlineSearch size={30} />
                        </InputAdornment>
                    ),
                }}
            />

            {pokemonSelected && <DetailModal pokemon={pokemonSelected} open={openModal} handleOpenCloseModal={handleOpenCloseModal}/>}

            <Grid container spacing={2} >
                {responseDetail && responseDetail.map((pokemon, i)=>{
                    return (
                        <Grid xs={12} sm={6} md={4} item key={i}>
                            <PokeInfo pokemon={pokemon} handleOpenModal={handleOpenModal}/>
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

import React, {useEffect, useMemo, useState} from 'react';
import {Button, Card, CardMedia, Grid, Typography} from "@mui/material";
import { getDetailPokemonById} from "../../services/pokemonService";
import {NavLink, useParams} from "react-router-dom";

const style = {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '4px solid #005baa',
    boxShadow: 24,
    p: 4,
};

const Detail = () => {
    const [pokemon, setPokemon] = useState({});
    const [moveList, setMoveList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchData().then(data => {
            setMoveList(getMoveList(data.moves, 4));
        });

        return () => {
            setPokemon({ moves: [] });
        };
    }, [id]);

    useEffect(() => {
        console.log("pokemon", pokemon);
    }, [pokemon, moveList]);

    const fetchData = async () => {
        try {
            const data = await getDetailPokemonById(id);
            setPokemon(data);
            return data;
        } catch (error) {
            console.error("Get List pokemon: ", error);
            return error;
        }
    };

    function getMoveList(array, cant) {
        if (!Array.isArray(array)) {
            throw new TypeError('El argumento proporcionado no es un arreglo.');
        }

        const result = [];
        const arrayCopy = [...array];
        for (let i = 0; i < cant; i++) {
            if (arrayCopy.length === 0) break;
            const indiceAleatorio = Math.floor(Math.random() * arrayCopy.length);
            result.push(arrayCopy.splice(indiceAleatorio, 1)[0]);
        }
        return result;
    }

    return (
        <>
        {pokemon && (
            <Grid container sx={style} spacing={2} display="flex" justifyContent="center" alignContent="center">
                <Grid item xs={12} sx={{textAlign: "center"}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="bold">
                        {pokemon.name && pokemon?.name.toUpperCase()}
                    </Typography>
                </Grid>
                <Grid item md={6} sx={{textAlign: "center"}}>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        <strong>Height:</strong> {pokemon?.height}
                    </Typography>
                    <Typography variant="body2" >
                        <strong>Weight:</strong> {pokemon?.weight}
                    </Typography>

                    {pokemon?.types?.map(({type})=>{
                        return (
                            <Typography variant="body2" key={type.name}>
                                <strong>Type:</strong> {type?.name.toUpperCase()}
                            </Typography>)
                    })}
                    {(pokemon.types?.length === 1) && (
                        <Typography variant="body2" color="white">
                            {pokemon.types[0]?.type?.name}
                        </Typography>
                    )}
                </Grid>

                <Grid item md={6} sx={{textAlign: "center"}}>
                    {moveList && moveList.map((nro, i) => {
                        return (<Typography key={i} variant="body2">
                            <strong>{i+1}º Movement:</strong> {nro.move.name}
                        </Typography>)
                    })}
                </Grid>
                <Grid item md={4}>
                    <Card sx={{ width: 150, boxShadow: 'none' }}>
                        <CardMedia
                            sx={{ height: 150 }}
                            image={pokemon?.sprites?.front_default}
                            title="Pokemones primera generacion"
                        />
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={{ width: 150, boxShadow: 'none' }}>
                        <CardMedia
                            sx={{ height: 150 }}
                            image={pokemon?.sprites?.back_default}
                            title="Pokemones primera generacion"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sx={{textAlign: "center"}}>
                    <NavLink to={`/`}><Button size="small" >Back home</Button></NavLink>
                </Grid>
            </Grid>
        )}
        </>
    );
};

export default Detail;

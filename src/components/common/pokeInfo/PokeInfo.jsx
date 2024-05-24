import React, {useContext, useEffect} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {AppContext} from "../../../context/ContextProvider";

const PokeInfo = ({pokemon, handleOpenModal}) => {

    const {addItemToCart} = useContext(AppContext);

    useEffect(() => {
    }, [pokemon]);

    const handleAddTeam = ()=> {
        console.log("poke", pokemon)
        const addingPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            imgUrl: pokemon.sprites.front_default,
        }
        addItemToCart(addingPokemon);
    }

    return (
        <Paper elevation={6} sx={{mt:4, p:2, display: 'flex', justifyContent: 'center'}}>

            <Card sx={{ maxWidth: '100%', boxShadow: 'none' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={pokemon?.sprites?.front_default}
                    title="Pokemones primera generacion"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {pokemon?.name?.toUpperCase()}
                    </Typography>
                    <Typography variant="body2">
                        <strong>Nº:</strong> {pokemon?.id}
                    </Typography>
                    {pokemon.types.map(({type})=>{
                        return (
                            <Typography variant="body2" key={type.name}>
                                <strong>Type:</strong> {type?.name.toUpperCase()}
                            </Typography>)
                    })}
                    {(pokemon.types.length === 1) && (
                        <Typography variant="body2" color="white">
                            {pokemon.types[0]?.type?.name}
                        </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>handleAddTeam(pokemon)}>Add Team</Button>
                    <Button size="small" onClick={handleOpenModal}>Learn More</Button>
                </CardActions>
            </Card>
        </Paper>
    );
};

export default PokeInfo;

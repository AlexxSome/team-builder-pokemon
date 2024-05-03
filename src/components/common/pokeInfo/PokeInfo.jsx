import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import pokemons from "../../../assets/img/primeragen.jpg"

const PokeInfo = ({pokemon}) => {
    return (
        <Paper elevation={6} sx={{mt:4}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={pokemons}
                    title="Pokemons primera generacion"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pokemon
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add Team</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Paper>
    );
};

export default PokeInfo;
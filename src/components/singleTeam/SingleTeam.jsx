import React, {useContext, useEffect, useState} from 'react';
import {Card, CardContent, CardMedia, Container, Grid, Paper, Typography} from "@mui/material";
import {AppContext, ContextProvider} from "../../context/ContextProvider";

const SingleTeam = () => {
    const {state} = useContext(AppContext);

    const [singleTeam, setSingleTeam] = useState([]);

    useEffect(() => {
        setSingleTeam(state.singleTeam)
    }, [singleTeam]);



    return (
        <Container sx={{mt:2}}>
            <Grid container spacing={1} sx={{display: 'flex', m: 4}}>
                {singleTeam.map((pokemon, i) => {
                    return (
                        <Grid xs={12} sm={6} md={4} item key={i}>
                            <Paper elevation={6} sx={{mt: 4, p: 2, display: 'flex', justifyContent: 'center'}}>
                                <Card sx={{maxWidth: '100%', boxShadow: 'none'}} key={i}>
                                    <CardMedia
                                        sx={{height: 140}}
                                        image={pokemon?.imgUrl}
                                        title="Pokemones primera generacion"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {pokemon?.namePokemon?.toUpperCase()}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>

                    )
                })}
            </Grid>
        </Container>
    );
};

export default SingleTeam;

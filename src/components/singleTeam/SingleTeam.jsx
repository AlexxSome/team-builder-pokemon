import React, {useContext, useEffect, useState} from 'react';
import {Card, CardContent, CardMedia, Container, Grid, Paper, Typography} from "@mui/material";
import {AppContext} from "../../context/ContextProvider";
import soundFile from "../../assets/sounds/theme-opening.mp3";
import useSound from 'use-sound';

const SingleTeam = () => {
    const {state} = useContext(AppContext);
    const [play, {stop}] = useSound(soundFile);
    const [singleTeam, setSingleTeam] = useState([]);

    useEffect(() => {
        setSingleTeam(state.singleTeam)
    }, [singleTeam, state]);

    useEffect(() => {
        play();
        return()=>{
            stop();
        }
    }, [play]);


    return (
        <Container sx={{mt:10}}>
            <Grid container spacing={1} sx={{display: 'flex', m: 4}}>
                {singleTeam && singleTeam.map((pokemon, i) => {
                    return (
                        <Grid xs={12} sm={6} md={4} item key={i}>
                            <Paper elevation={6} sx={{mt: 4, p: 2, display: 'flex', justifyContent: 'center'}}>
                                <Card sx={{ width: 150, boxShadow: 'none' }}>
                                    <CardMedia
                                        sx={{height: 140}}
                                        image={pokemon?.imgUrl}
                                        title="Pokemones primera generacion"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            <stong>{pokemon?.name?.toUpperCase()}</stong>
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Team : {pokemon?.teamId?.toUpperCase()}
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

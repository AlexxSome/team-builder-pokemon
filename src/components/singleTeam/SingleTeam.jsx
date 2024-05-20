import React, {useEffect} from 'react';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {Card, CardContent, CardMedia, Container, Grid, Paper, Typography} from "@mui/material";

const SingleTeam = () => {
    const [teamList, setTeamList] = React.useState('');

    useEffect(() => {
        const db = getFirestore();

        const singleTeamList = collection(db, "single-team");

        getDocs(singleTeamList).then((data) => {
            setTeamList(data.docs.map((doc) => doc.data()))
        })
    }, []);

    return (
        <Container sx={{mt:2}}>
            <Grid container spacing={1} sx={{display: 'flex', m: 4}}>
                {teamList && teamList.map((pokemon, i) => {
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

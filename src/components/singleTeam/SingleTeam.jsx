import React, {useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {Card, CardContent, CardMedia, Paper, Typography} from "@mui/material";

const MyComponent = () => {
    const [teamList, setTeamList] = React.useState('');

    useEffect(() => {
        const db = getFirestore();

        const singleTeamList = collection(db, "single-team");

        getDocs(singleTeamList).then((snapshot)=>{
            setTeamList(snapshot.docs.map((doc)=> doc.data()))
        })
    }, []);

    return (
        <div>
            <h1>Single Team</h1>
            <p>
                {teamList && teamList.map((pokemon,i)=>{
                   return ( <Paper elevation={6} sx={{mt:4, p:2, display: 'flex', justifyContent: 'center'}}>
                        <Card sx={{ maxWidth: '100%', boxShadow: 'none' }} key={i}>
                            <CardMedia
                                sx={{ height: 140 }}
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
                   )
                })}
            </p>
        </div>
    );
};

export default MyComponent;

import React, {useEffect, useState} from 'react';
import { Card, CardMedia, Grid, Modal, Typography} from "@mui/material";
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

const DetailModal = ({pokemon, open, handleOpenCloseModal}) => {
    const [moveList, setMoveList] = useState([]);

    function getPokemon() {
        return new Promise((resolve) => {
            let tempMoveList = [];
            if(pokemon?.moves.length < 2){
                tempMoveList.push(0)
            }else{
                while (tempMoveList.length < 4) {
                    let randomNumber = Math.floor(Math.random() * pokemon?.moves.length);
                    if (!tempMoveList.includes(randomNumber)) {
                        tempMoveList.push(randomNumber);
                    }
                }
            }

            resolve(tempMoveList)
        })
    }

    useEffect(() => {
        console.log("Ditto", pokemon)
        getPokemon().then((data)=>{
            setMoveList(data);
        });
    }, []);

    return (
        <Modal
            open={open}
            onClose={handleOpenCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Grid container sx={style} spacing={2}>
                <Grid item>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {pokemon.name && pokemon?.name.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        <strong>Height:</strong> {pokemon?.height}
                    </Typography>
                    <Typography variant="body2" >
                        <strong>Weight:</strong> {pokemon?.weight}
                    </Typography>

                    {moveList && moveList.map((nro, i) => {
                        return (<Typography key={i} variant="body2">
                            <strong>{i+1}º Movement:</strong> {pokemon?.moves[nro].move.name}
                        </Typography>)
                    })}
                </Grid>
                <Grid item>
                    <Card sx={{ width: 150, boxShadow: 'none' }}>
                    <CardMedia
                        sx={{ height: 150 }}
                        image={pokemon?.sprites?.back_default}
                        title="Pokemones primera generacion"
                    />
                    </Card>
                </Grid>
            </Grid>
        </Modal>
    );
};

export default DetailModal;
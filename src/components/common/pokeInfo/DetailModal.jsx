import React, {useEffect, useState} from 'react';
import {Box, Modal, Typography} from "@mui/material";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #005baa',
    boxShadow: 24,
    p: 4,
};

const DetailModal = ({pokemon, open, handleOpenCloseModal}) => {
    const [moveList, setMoveList] = useState([]);

    useEffect(() => {
        let tempMoveList = [];
        while (tempMoveList.length < 4) {
            let randomNumber = Math.floor(Math.random() * pokemon?.moves.length);
            if (!tempMoveList.includes(randomNumber)) {
                tempMoveList.push(randomNumber);
            }
        }
        setMoveList(tempMoveList);
    }, [pokemon]);

    useEffect(() => {
        console.log("Moves", pokemon.moves)
    }, [moveList]);

    return (
        <Modal
            open={open}
            onClose={handleOpenCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
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
                        <strong>{i+1}º Movement:</strong> {pokemon.moves && pokemon?.moves[nro].move.name}
                    </Typography>)
                })}

            </Box>
        </Modal>
    );
};

export default DetailModal;
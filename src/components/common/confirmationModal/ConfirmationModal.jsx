import React, {useContext} from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Modal, Paper, Typography} from "@mui/material";
import {AppContext} from "../../../context/ContextProvider";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflow: 'auto',
    p: 4,
    display: 'flex',
};

const ConfirmationModal = ({openConfirmation, setOpenConfirmation}) => {
    const {state} = useContext(AppContext);
    return (
        <Modal
            open={openConfirmation}
            onClose={()=>{setOpenConfirmation(!openConfirmation)}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} xs={12} md={6}>
            {state.teamCart.map((item, index) => (
                <Paper  elevation={6} sx={{mt:4, p:2, display: 'flex', justifyContent: 'center'}}>
                <Card sx={{ maxWidth: '100%', boxShadow: 'none' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={item?.imgUrl}
                        title="Pokemones primera generacion"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="div">
                            <strong>Nombre:</strong> {item?.name?.toUpperCase()} <strong> Nº Pokedex:</strong> {item?.id}
                        </Typography>
                    </CardContent>
                </Card>
                </Paper>
            ))}
            </Box>
        </Modal>
    );
};

export default ConfirmationModal;

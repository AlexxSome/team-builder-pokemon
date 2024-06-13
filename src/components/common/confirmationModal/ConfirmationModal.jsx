import React, {useContext, useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, CardMedia, Grid, Modal, Paper, TextField, Typography} from "@mui/material";
import {AppContext} from "../../../context/ContextProvider";
import {MdOutlineSave} from "react-icons/md";
import {getFirestore, addDoc, collection} from "firebase/firestore";
import {redirect, useNavigate} from "react-router-dom";

const ConfirmationModal = ({openConfirmation, setOpenConfirmation}) => {
    const navigate = useNavigate();
    const {state, clearCart} = useContext(AppContext);
    const [teamId, setTeamId] = useState(0);
    const [payload, setPayload] = useState([]);
    useEffect(() => {
        const newPayload = {
            teamId: teamId,
            team: state.teamCart
        }
        setPayload(newPayload)
    }, [teamId]);

    const handleSave = async () => {
        const db = getFirestore();
        try{
            const response = await addDoc (collection(db,"single-team"),payload).then((data)=>{
                clearCart();
                console.log("datos insertados", data);
                setOpenConfirmation(!openConfirmation);
            })
            navigate("/home", {replace:true})
        }catch (error) {
            console.error("error", error)
        }
    };

    return (
        <Modal
            open={openConfirmation}
            onClose={()=>{setOpenConfirmation(!openConfirmation)}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '85%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 26,
                overflow: 'auto',
                p: 4,
                display: 'flex',
        }}
        >
            <Box>
                <Grid container sx={{width: '100%'}}>
                    {state.teamCart.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} gap={2} flexDirection="row" key={index}>
                        <Paper elevation={6} sx={{mt:4, p:2}} key={index}>
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
                        </Grid>
                    ))}
                    <Grid xs={12} mt={4}>
                        <TextField
                            value={teamId}
                            fullWidth sx={{mb:2}}
                            id="text-teamId"
                            label="Identificator team"
                            variant="standard"
                            onChange={(newValue)=> setTeamId(newValue.target.value)}
                        />
                    </Grid>
                    <Grid xs={12} mt={4}>
                        <Button
                            onClick={handleSave}
                            variant="contained"
                            size="large"
                            startIcon={<MdOutlineSave />}
                            color="primary"
                            fullWidth
                        >
                            Guardar{" "}
                        </Button>
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    );
};

export default ConfirmationModal;

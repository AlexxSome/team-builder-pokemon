import React, {useEffect, useState} from 'react';
import {  Grid, Typography} from "@mui/material";


const DetailModal = ({pokemon}) => {
    const [moveList, setMoveList] = useState([]);

    function getPokemon() {
        return new Promise((resolve) => {
            let tempMoveList = [];
            if(pokemon?.moves?.length < 2){
                tempMoveList.push(0)
            }else{
                while (tempMoveList?.length < 4) {
                    let randomNumber = Math.floor(Math.random() * pokemon?.moves?.length);
                    if (!tempMoveList.includes(randomNumber)) {
                        tempMoveList.push(randomNumber);
                    }
                }
            }
            resolve(tempMoveList)
        })
    }

    useEffect(() => {
        getPokemon().then((data)=>{
            setMoveList(data);
        });
    }, []);

    return (
                <Grid item>
                    {moveList && moveList.map((nro, i) => {
                        return (<Typography key={i} variant="body2">
                            <strong>{i+1}º Movement:</strong> {pokemon?.moves[nro].move.name}
                        </Typography>)
                    })}
                </Grid>

    );
};

export default DetailModal;
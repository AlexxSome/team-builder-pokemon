import React, {useEffect} from 'react';
import {Typography} from "@mui/material";
import useSound from "use-sound";
import soundFile from "../../assets/sounds/theme-opening.mp3";

const MyComponent = () => {
    const [play, {stop}] = useSound(soundFile);
    useEffect(() => {
        play();
        return()=>{
            stop();
        }
    }, [play]);
    return (
        <>
            <Typography variant="h1" sx={{mt:12}}>
                Double T
            </Typography>
        </>
    );
};

export default MyComponent;

import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";

const Detail = () => {
    const [data, setData] = useState({})
    useEffect(() => {
    }, []);

    useEffect(()=> {
        console.log('data', data)
    },[data])


    return (
        <div>
            <Typography variant="h2">Detail</Typography>
        </div>
    );
};

export default Detail;

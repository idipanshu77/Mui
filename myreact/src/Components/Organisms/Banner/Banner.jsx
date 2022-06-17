import * as React from 'react';
import { Box, CardMedia } from '@mui/material';
import image from "../../../Assets/bg-1.4a11e228.jpg"

export default function BoxSx() {
    return (
        <Box sx={{ position: "relative" }}>
            <CardMedia
                component="img"
                height="614px"
                maxWidth="100%"
                image={image}
                // backgroundImage= `url(${image})` 
                alt="green iguana"
            />           

        </Box>
    );
}

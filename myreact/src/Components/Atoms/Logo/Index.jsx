import * as React from 'react';
import LogoImg from "../../../Assets/Logo.png";
import { Box, Avatar, Typography } from '@mui/material';

export default function Logo() {
    return (
        <Box display="flex" >
            <Avatar src={LogoImg} aria-label="recipe" sx={{ mx: '15px' }}>
            </Avatar>

            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Reactify
            </Typography>
        </Box>
    );
}
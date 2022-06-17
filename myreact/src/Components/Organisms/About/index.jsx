import * as React from 'react';
import { Grid, Box } from '@mui/material';
import Info from '../../Molucule/Feeds';

export default function () {
    return (
        <Box sx={{ my: "20px" }}>
            <Grid container spacing={2} >

                <Grid item xs={6} md={3}>
                    <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5" }}>
                        <Info />
                    </Box>
                </Grid>


                <Grid item xs={6} md={3}>
                    <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5" }}>
                        <Info />
                    </Box>
                </Grid>


                <Grid item xs={6} md={3}>
                <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5" }}>
                        <Info />
                    </Box>
                </Grid>


                <Grid item xs={6} md={3}>
                <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5" }}>
                        <Info />
                    </Box>
                </Grid>

            </Grid >

        </Box >
    )
}

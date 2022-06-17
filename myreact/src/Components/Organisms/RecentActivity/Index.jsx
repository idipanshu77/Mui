import * as React from 'react';
import { Grid, Box } from '@mui/material';
import VerticalLinearStepper from '../../Molucule/Activity/index'
import TextMobileStepper from '../../Molucule/ActivityRight/index'

export default function() {
    return (
        <Box sx={{ my: "20px" }}>
            <Grid container spacing={2} >

                <Grid item xs={6} md={4}>
                    <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5" }}>
                        <VerticalLinearStepper />
                    </Box>
                </Grid>

                <Grid item xs={6} md={8}>
                    <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5" }}>
                        <TextMobileStepper/>
                    </Box>
                </Grid>

            </Grid >

        </Box >
    )
}

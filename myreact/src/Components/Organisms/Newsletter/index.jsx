import * as React from 'react';
import { Grid, Box, Typography, IconButton, Button } from '@mui/material';
import Demo from '../../Atoms/AreaChart';
import Comments from '../../Molucule/RecentComment';
import { Remove, Autorenew, Close, ArrowUpward } from '@mui/icons-material/';

export default function () {

    return (

        <Box sx={{ my: "20px" }}>
            <Grid container spacing={2} >
                <Grid item lg={6}>
                    <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5", height: "401px" }}>
                        <Demo />
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Box sx={{
                        border: "0px solid #727891", borderRadius: "5px", boxShadow: "5", height: "401px",
                        overflowY: "scroll",
                    }}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h5" component="h2" sx={{ p: "15px" }} >Recent Comments</Typography>
                            <Box>
                                <IconButton >
                                    <Remove />
                                </IconButton>
                                <IconButton>
                                    <Autorenew />
                                </IconButton>
                                <IconButton>
                                    <Close />
                                </IconButton>
                            </Box>
                        </Box>
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Box sx={{ p: "15px" }}>
                            <Button variant="contained" size="small" color="primary">
                                View All
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

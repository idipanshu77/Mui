import * as React from 'react';
import { Grid, Box, Typography, IconButton, Button } from '@mui/material';
import AlignItemsList from '../../Molucule/TopHeading/index';
import Example from '../../Atoms/Charts/Index';
import PieClass from '../../Atoms/PieChart/Index';
import { Remove, Autorenew, Close, ArrowUpward } from '@mui/icons-material/';


export default function () {
    return (
        <Box sx={{ my: "20px" }}>
            <Grid container spacing={2} >
                <Grid item lg={8}>
                    <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5" }}>
                        {/* <Typography variant="h4" component="h2" */}
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h4" component="h2">Top Heading</Typography>
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
                        <AlignItemsList />
                        
                        <Box sx={{ p: "15px" }}>
                            <Button variant="contained" color="success">
                                Add More
                            </Button>
                        </Box>
                    </Box>

                </Grid>
                <Grid item lg={4} >
                    <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5", p: "15px" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h3" component="h2">Visitor</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1">12,500</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="body2" component="p">+24% From Last Month</Typography>
                        </Box>
                        <Example />
                    </Box>
                    <Box sx={{ border: "0px solid #727891", borderRadius: "5px", boxShadow: "5", p: "15px" }}>
                        <Typography variant="h4" component="h2"
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>Subscribe</Typography>
                        < PieClass />
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}

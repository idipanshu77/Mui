import * as React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid, IconButton } from '@mui/material';
import Trending from '../../../Assets/profile-bg.5573c7e7.jpg'
import { Bolt, ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material/';

export default function Trending_policy() {
    return (
        <Box sx={{ my: "10px" }}>
            <Grid container sx={{
                color: "white",
                my: 1,
                border: '1px solid #464D69',
                borderRadius: '5px',
                backgroundImage: `url(${Trending})`
            }} >
                <Grid item lg={2} sx={{
                    textAlign: 'center',
                    margin: 'auto 0',
                    color: 'white'
                }}>
                    <Typography >Trending
                        <IconButton sx={{ color: 'white' }}>
                            <Bolt />
                        </IconButton>
                    </Typography>

                </Grid>
                {/* <Divider sx={{border:'1px solid red '}}/> */}
                <Grid item lg={10}>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="05"
                                secondary={
                                    <React.Fragment>
                                        <Typography variant="body2" color="white">
                                            July
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary="Telecom Commission approved new telecom policy."
                                secondary={
                                    <React.Fragment>
                                        <Typography variant="body2" color="white">
                                            Dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat…
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <IconButton sx={{ color: 'white', alignItems: 'center', margin: 'auto' }}>
                                <ArrowCircleLeft />
                            </IconButton>

                            <IconButton sx={{ color: 'white', alignItems: 'center', margin: 'auto' }}>
                                <ArrowCircleRight />
                            </IconButton>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, Grid, dense, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material/';



import SocialMedia from '../../../Assets/facebook.svg'

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function Info() {
    const [secondary, setSecondary] = React.useState(false);
    return (
        <Demo>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Image" src={SocialMedia}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="89k"
                        secondary={secondary ? 'Secondary text' : "Friends"}
                    />
                    <ListItemText
                        primary="459"
                        secondary={secondary ? 'Secondary text' : "Feeds"}
                    />
                </ListItem>

            </List>
        </Demo>

    );
}

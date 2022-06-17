import * as React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material/';

import Recent from '../../../Assets/team-2.jpg'

export default function Comments() {
  return (
    <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Image" src={Recent}
          />
        </ListItemAvatar>
        <ListItemText
          primary="Kate Doyle"
          secondary={
            <>
              <Typography color="textPrimary">commented on 4 keys to make your business unique.</Typography>
              <Typography>Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</Typography>
            </>
          }
        />
      </ListItem>
      <Divider />
    </List>
  );
}

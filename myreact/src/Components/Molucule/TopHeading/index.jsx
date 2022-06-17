import * as React from "react";
import { List, Box, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Button, Typography, ListItemButton, } from "@mui/material/";
import Gallery from "../../../Assets/gallery-1.8d5e7897.jpg";

export default function AlignItemsList() {
  return (
    <Box>
      <List>
        <ListItem alignItems="flex-start" >
          <ListItemAvatar sx={{margin:"0px"}}>
            <Avatar
              alt="Image"
              variant="square"
              src={Gallery}
              sx={{ width: "80px", height: "80px" }}
            />
          </ListItemAvatar>
          <Box sx={{ ml: "20px" }}>
            <ListItemButton sx={{ p: "0" }}>
              <Button
                color="error"
                variant="contained"
                sx={{ padding: "0 10px" }}
              >
                Technology
              </Button>
            </ListItemButton>
            <ListItemText
              primary={
                <Typography variant="h5">
                  Telecom Commission approves net neutrality, new telecom policy
                </Typography>
              }
              secondary={
                <Typography variant="p" color="GrayText.secondary">
                  New Deilhi July 11 2018
                </Typography>
              }
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{margin:"0px"}}>
            <Avatar
              alt="Image"
              variant="square"
              src={Gallery}
              sx={{ width: "80px", height: "80px" }}
            />
          </ListItemAvatar>
          <Box sx={{ ml: "20px" }}>
            <ListItemButton sx={{ p: "0" }}>
              <Button
                color="secondary"
                variant="contained"
                sx={{ padding: "0 10px" }}
              >
                Weather
              </Button>
            </ListItemButton>
            <ListItemText
              primary={
                <Typography variant="h5">
                  Check status of Mumbai local, long-distance trains as rains
                  continue
                </Typography>
              }
              secondary={
                <Typography variant="p" color="GrayText.secondary">
                  Mumbai July 11 20188
                </Typography>
              }
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{margin:"0px"}}>
            <Avatar
              alt="Image"
              variant="square"
              src={Gallery}
              sx={{ width: "80px", height: "80px" }}
            />
          </ListItemAvatar>
          <Box sx={{ ml: "20px" }}>
            <ListItemButton sx={{ p: "0" }}>
              <Button
                color="primary"
                variant="contained"
                sx={{ padding: "0 10px" }}
              >
                Sports
              </Button>
            </ListItemButton>
            <ListItemText
              primary={
                <Typography variant="h5">
                  Croatia lowest ranked team in history to reach World Cup final
                </Typography>
              }
              secondary={
                <Typography variant="p" color="GrayText.secondary">
                  {" "}
                  CroatiaJuly 11 2018
                </Typography>
              }
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{margin:"0px"}}>
            <Avatar
              alt="Image"
              variant="square"
              src={Gallery}
              sx={{ width: "80px", height: "80px" }}
            />
          </ListItemAvatar>
          <Box sx={{ ml: "20px" }}>
            <ListItemButton sx={{ p: "0" }}>
              <Button
                color="string"
                variant="contained"
                sx={{ padding: "0 10px" }}
              >
                World
              </Button>
            </ListItemButton>
            <ListItemText
              primary={
                <Typography variant="h5">
                  Vistara orders Boeing, Airbus jets worth $3.1 billion
                </Typography>
              }
              secondary={
                <Typography variant="p" color="GrayText.secondary">
                  {" "}
                  USA July 10 2018
                </Typography>
              }
            />
          </Box>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
}

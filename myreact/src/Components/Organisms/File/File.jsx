import * as React from 'react';
import { Container, Card, Box } from '@mui/material';
import AccountMenu from '../Menu/Horizontal-menu'
import Trending_policy from '../Banner/Trending'
import Heading from '../Heading/Index'
import Newsletter from '../Newsletter/index';
import About from '../About/index';
import RecentActivity from '../RecentActivity/Index'


export default function Recipe() {
  return (
    <Box sx={{
      position: "absolute",
      backgroundColor: "whitesmoke",
      borderRadius: '15px',
      //  mb:'30px',
      boxShadow: "10",
      top: "50%",
      left: "50%",
      width: "100%",
      transform: "translate(-50%, -50%)",
      height: "401px",
      overflowY: "scroll",
    }}>
      <Card>
        <Container maxWidth="xl">
          <AccountMenu />
          <Trending_policy />
          <Heading />
          <Newsletter />
          <About />
          <RecentActivity />
        </Container>
      </Card>
    </Box>
  );
}

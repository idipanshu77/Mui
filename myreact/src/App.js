import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import Container  from '@mui/material/Container';
import Header from './Components/Organisms/Header/Header';
import Banner from './Components/Organisms/Banner/Banner';
import Menu from './Components/Organisms/Menu/Horizontal-menu';
import Recipe from './Components/Organisms/File/File';
import Anktech from './Components/Theme/Theme';

function App() {
  return (
    <>
   
  <CssBaseline>
    <Anktech>
    <Header />
    <Banner />    
    <Container maxWidth="xl">   
    <Recipe />   
    
    </Container>  
    </Anktech>
    </CssBaseline>
   
    
  </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Component/Header';
import CreateNote from './Component/CreateNote';
import { Box } from '@mui/material';
import Notes from './Component/Notes';

function App() {
  return (
    <div>
      <Header/>
      <Box style={{padding:20}}>
      <CreateNote/>
      <Notes/>
      </Box>
    </div>
  );
}

export default App;

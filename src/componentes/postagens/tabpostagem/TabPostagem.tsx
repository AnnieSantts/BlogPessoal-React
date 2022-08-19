import React, {useState} from 'react'
import { Tab, Tabs, Typography} from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import { AppBar, Box } from '@mui/material';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar sx={{bgcolor : "#05445E"}} position="static" className="divHome">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
          </Tabs>
        </AppBar>
        <TabPanel value="1" className='corInferior'>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
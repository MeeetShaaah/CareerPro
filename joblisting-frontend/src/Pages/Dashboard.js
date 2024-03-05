import * as React from 'react';
import { Box, Tab, Typography, Paper, Button, Grid } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import Create from './Create';

export default function Home() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={3}>
      
      <Grid item>
      <Button
  variant="outlined"
  component={Link}
  to="/"
  sx={{
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#3f51b5', // text color
    borderColor: '#3f51b5', // border color
    '&:hover': {
      backgroundColor: '#3f51b5', // background color on hover
      color: '#fff', // text color on hover
    },
  }}
>
  Home
</Button>
      </Grid>
      <Grid item>
        <Paper elevation={3} sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Create Post" value="1" />
            
              </TabList>
            </Box>
            <TabPanel value="1">
              <Create />
            </TabPanel>
          </TabContext>
        </Paper>
      </Grid>
    </Grid>
  );
}

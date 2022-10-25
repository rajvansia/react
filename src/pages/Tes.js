import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useQuery} from 'react-query';
import { KeyboardReturn } from '@mui/icons-material';

const fetchTime = async () => {
    const res = await fetch ('http://localhost:3000/time');
    return res.json();
}

const fetchStock = async () => {
    const resStock = await fetch ('http://localhost:3000/stock');
    return resStock.json();
}

const fetchPg= async () => {
    const resPg= await fetch ('http://localhost:3000/pg');
    return resPg.json();
}


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {

    const {data, status} = useQuery(['time'], fetchTime);
    const {data: datas, status: statusStock} = useQuery(['stock'], fetchStock);
    const {data: pgdata, status: statusPg} = useQuery(['pg'], fetchPg);


    // console.log(data);
    console.log(datas);
    console.log(data)
    console.log(pgdata)

  return (

    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with styled-components
        </Typography>

        {status == 'success' ?
        <Typography variant="h4" component="h1" gutterBottom>
          Test Time is {data.time}
        </Typography>
    
        :<CircularProgress />}

        {statusStock == 'success' ?
        <Typography variant="h4" component="h1" gutterBottom>
        Test Price is {datas.price}
        </Typography>
    
        :<CircularProgress />}

       {statusPg == 'success' ?
        <Typography variant="h4" component="h1" gutterBottom>
        Test postgres is {pgdata.sucess}
        </Typography>
    
        :<CircularProgress />}

        <Button variant="contained">Contained</Button>
        <TextField id="filled-basic" label="Filled" variant="filled" />

        <Copyright />
      </Box>
    </Container>
  );
}

// export default function App(){
// return (
//   <Test />
//   )
// }
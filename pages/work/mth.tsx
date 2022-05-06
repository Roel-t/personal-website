import { Container, Grid, Typography} from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const Mth: NextPage = () => {
    return (
        <Container>
        <Head>
          <title>Roel Tijerina | MTH</title>
        </Head>
        <Grid container className="grid-row-1" alignItems={"center"}>
            <Grid item xs={12} md={12} lg={12} sx={{textAlign:"center"}}>     
                <Typography variant="h6" color="red" sx={{padding:".5rem .5rem"}}>
                  🚧 Currently under construction, Sorry! 🚧
                </Typography>
            </Grid>
        </Grid>
        
      </Container>);
}
 
export default Mth;

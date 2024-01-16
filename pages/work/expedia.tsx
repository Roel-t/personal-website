import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Work.expedia.module.css';

const Expedia: NextPage = () => {
    return (
        <Container className={styles.expediaContainer}>
      <Head>
        <title>Roel Tijerina | Expedia Group</title>
      </Head>
      <Grid container className={styles.expediaSection} sx={{minHeight:"30rem",padding:"2rem 0rem", backgroundColor:"#b7bcd5",alignContent:"center"}}>
        <Grid item  className={styles.expediaSubSection} xs={12} md={12} lg={12} textAlign="center" >
          <Typography variant="h2" fontWeight={500}>
            Expedia Group
          </Typography>
          <Typography variant="h4" fontWeight={400} paddingTop={2}>
            Full stack application
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.expediaSection}>
        <Grid className={styles.expediaSubSection} item xs={12} md={12} lg={12} sx={{maxWidth:"60%"}} textAlign="right">
          <Typography variant="body1" fontWeight={400} paddingTop={2} sx={{ fontStyle: 'italic' }}>
            Jan 2023 - Present
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.expediaSection} paddingBottom={4}>
        <Grid className={styles.expediaSubSection} item xs={12} md={12} lg={12} sx={{maxWidth:"60%"}} textAlign="left">
          <Typography variant="h4" fontWeight={500}>
            Summary
          </Typography>
          <Typography variant="body1" fontWeight={400} paddingTop={2}>
            Working in front end Vrbo checkout experience
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.expediaSection} paddingBottom={4}>
        <Grid className={styles.expediaSubSection} item xs={12} md={12} lg={12}>
          <Typography variant="h5" fontWeight={400}>
            Role
          </Typography>
          
          <Typography variant="body1" fontWeight={500} paddingTop={2}>
            Software Engineer II
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.expediaSection} paddingBottom={4}>
        <Grid className={styles.expediaSubSection} item xs={12} md={12} lg={12}>
          <Typography variant="h5" fontWeight={400}>
            Tools
          </Typography>
          <Typography variant="body2" fontWeight={400} paddingTop={2}>
            ReactJs | NodeJs | Graphql | Docker | Cypress | Jest | Github
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.expediaSection}>
        <Grid className={styles.expediaSubSection} item xs={12} md={12} lg={12}>
          <Typography variant="h5" fontWeight={400}>
            Work
          </Typography> 
          <Typography variant="body1" fontWeight={400} paddingTop={2}>
            Front End engineer maintaining the Vrbo checkout experience application 
          </Typography>
        </Grid>
      </Grid>
      
    </Container>
        );
}
 
export default Expedia;

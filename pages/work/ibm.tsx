import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Work.ibm.module.css';

const Ibm: NextPage = () => {
  return (
    <Container className={styles.ibmContainer}>
      <Head>
        <title>Roel Tijerina | IBM</title>
      </Head>
      <Grid container className={styles.ibmSection} sx={{minHeight:"30rem", backgroundColor:"#b7bcd5",alignContent:"center"}}>
        <Grid item  className={styles.ibmSubSection} xs={12} md={12} lg={12} textAlign="center" >
          <Typography variant="h2" fontWeight={500}>
            IBM
          </Typography>
          <Typography variant="h4" fontWeight={400} paddingTop={2}>
            Full stack React/Node application
          </Typography>
          <div className={styles.ibmImage}>
            <CardMedia
                sx={{width:"50%",height:"auto"}}
                component="img"
                image="../ibmWork.png"
                alt="ibm work picture"
              />
          </div>
        </Grid>
      </Grid>
      <Grid container className={styles.ibmSection}>
        <Grid className={styles.ibmSubSection} item xs={12} md={12} lg={12} sx={{maxWidth:"60%"}} textAlign="right">
          <Typography variant="body1" fontWeight={400} paddingTop={2} sx={{ fontStyle: 'italic' }}>
          Feb 2020 - Jan 2023
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.ibmSection} paddingBottom={4}>
        <Grid className={styles.ibmSubSection} item xs={12} md={12} lg={12} sx={{maxWidth:"60%"}} textAlign="left">
          <Typography variant="h4" fontWeight={500}>
            Summary
          </Typography>
          <Typography variant="body1" fontWeight={400} paddingTop={2}>
            Worked in a React and NodeJs based web application in charge of developing front and backend features.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.ibmSection} paddingBottom={4}>
        <Grid className={styles.ibmSubSection} item xs={12} md={12} lg={12}>
          <Typography variant="h5" fontWeight={400}>
            Role
          </Typography>
          
          <Typography variant="body1" fontWeight={500} paddingTop={2}>
            Software Engineer
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.ibmSection} paddingBottom={4}>
        <Grid className={styles.ibmSubSection} item xs={12} md={12} lg={12}>
          <Typography variant="h5" fontWeight={400}>
            Tools
          </Typography>
          <Typography variant="body2" fontWeight={400} paddingTop={2}>
            ReactJs | NodeJs | ExpressJs | IBM Carbon design system | IBM Cloudant (Apache CouchDB) |  Docker | Jest | Github 
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.ibmSection}>
        <Grid className={styles.ibmSubSection} item xs={12} md={12} lg={12}>
          <Typography variant="h5" fontWeight={400}>
            Work
          </Typography> 
          <Typography variant="body1" fontWeight={400} paddingTop={2}>
            Engineer on a the new application development of a web cloud application using React/Node.js that manages issues for more than 7,000 of IBM&apos;s external clients.
          </Typography>
          <Typography variant="body1" fontWeight={400} paddingTop={2}>
            <ul>
              <li>Configured setting up backend Rest APIs, automated reporting services, and email template notifications services</li>
              <li>Configured unit testing for backend APIs using Jest/Supertest</li>
              <li>Configured devOps operations such as setting up Github configurations, databases, and app deployment using Docker onto IBM&apos;s Cloud service</li>
              <li>Developed new features in frontend application</li>
              <li>Contributed to the design process of new features and advocated for accessibility standards</li>
              <li>Decreased loading page times from 40s to under 10 seconds in established Java projects and implemented UI fixes to create consistency across the application</li>
              <li>Assisted other teams at migrating existing projects to support IBM&apos;s Carbon Design System</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      
    </Container>);
}

export default Ibm;

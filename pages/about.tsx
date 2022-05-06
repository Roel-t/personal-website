import { Container, Grid, Typography, Card, Chip, Icon} from '@mui/material';
import { Computer,Devices,Javascript, Laptop, Palette, PhoneIphone } from '@mui/icons-material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/About.module.css';


type Props = {}

const About = (props: Props) => {
  return (
    <Container>
        <Head>
          <title>Roel Tijerina | About</title>
        </Head>
        <Grid container className="grid-row-1" alignItems={"center"}>
            <Grid item xs={12} md={12} lg={12} sx={{textAlign:"center"}}>     
                <Typography variant="h6" sx={{padding:".5rem .5rem"}}>
                    
                </Typography>
            </Grid>
        </Grid>
        <Grid container className="grid-row-1" alignItems={"center"} rowSpacing={1} columnSpacing={{ sm: 4, md: 8,lg:12 }}>
            <Grid item xs={12} sm={6} md={4} lg={4} className={styles.card}>
                <Card raised elevation={6} className={styles.cardContent}>
                    <Laptop className="primary-color-theme"  sx={{ fontSize: 50 }} style={{paddingTop:"1rem"}}/>
                    <Typography variant="h6" sx={{padding:".5rem .5rem"}}>
                        Full Stack Development
                    </Typography>
                    <div className={styles.cardLine}/>
                    <Typography variant="body2" sx={{padding:"0rem .5rem"}}>
                        Skilled web developer with experience configuring 
                        and setting backend services to styling the front end interface.
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} className={styles.card}>
                <Card raised elevation={6} className={styles.cardContent}>
                    <PhoneIphone className="primary-color-theme" sx={{ fontSize: 50 }} style={{paddingTop:"1rem"}}/>
                    <Typography variant="h6" sx={{padding:".5rem .5rem"}}>
                        Mobile Development
                    </Typography>
                    <div className={styles.cardLine}/>
                    <Typography variant="body2" sx={{padding:"0rem .5rem"}}>
                        Skilled at building web applications that look and perform great on mobile devices.
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} className={styles.card}>
                <Card raised elevation={6} className={styles.cardContent}>
                    <Palette className="primary-color-theme"  sx={{ fontSize: 50 }} style={{paddingTop:"1rem"}}/>
                    <Typography variant="h6" sx={{padding:".5rem .5rem"}}>
                        UI/UX
                    </Typography>
                    <div className={styles.cardLine}/>
                    <Typography variant="body2" sx={{padding:"0rem .5rem"}}>
                        Passionate about advocating for the design process and keeping up with modern UI design patterns.
                    </Typography>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} lg={4} className={styles.card}>
                <Card raised elevation={6} className={styles.cardContent}>
                    <Laptop className="primary-color-theme"  sx={{ fontSize: 50 }} style={{paddingTop:"1rem"}}/>
                    <Typography variant="h6" sx={{padding:".5rem .5rem"}}>
                        Devops
                    </Typography>
                    <div className={styles.cardLine}/>
                    <Typography variant="body2" sx={{padding:"0rem .5rem"}}>
                        Experienced with configuring application deployment using Docker and Git/Github for version control.
                    </Typography>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} lg={4} className={styles.card}>
                <Card raised elevation={6} className={styles.cardContent}>
                    <Laptop className="primary-color-theme" sx={{ fontSize: 50 }} style={{paddingTop:"1rem"}}/>
                    <Typography variant="h6" sx={{padding:".5rem .5rem"}}>
                        Agile Development
                    </Typography>
                    <div className={styles.cardLine}/>
                    <Typography variant="body2" sx={{padding:"0rem .5rem"}}>
                        Experienced with working in an Agile environment to collaborate with my teammates and stakeholders. 
                    </Typography>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} lg={4} className={styles.card}>
                <Card raised elevation={6} className={styles.cardContent}>
                    <Laptop className="primary-color-theme" sx={{ fontSize: 50 }} style={{paddingTop:"1rem"}}/>
                    <Typography variant="h6" sx={{padding:".5rem .5rem"}}>
                        SEO
                    </Typography>
                    <div className={styles.cardLine}/>
                    <Typography variant="body2" sx={{padding:"0rem .5rem"}}>
                        Knowledgeable in working on setting up a web app for a better Search Engine Optimization. 
                    </Typography>
                </Card>
            </Grid>    
        </Grid>
        
    </Container>
  )
}

export default About
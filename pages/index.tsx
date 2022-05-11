import { Container, Grid, Typography, Card, Chip, Icon,CardMedia,Link,Theme} from '@mui/material';
import { CodeOff, Computer,Devices,Javascript } from '@mui/icons-material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CustomLink from '../components/CustomLink';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';


const Home: NextPage = () => {

  const matches = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
  return (
    <Container>
      <Head>
        <title>Roel Tijerina | Home</title>
      </Head>
      <Grid container className={matches ? "grid-row-2":"grid-row-1"} alignItems="center">
        <Grid item xs={12} md={6} lg={6} textAlign="center">
            <Typography variant="h1" padding={2} fontWeight={800}>
                Web Developer
            </Typography>
            <Typography variant="h6" padding={2} paddingTop={2}>
              Hello! Currently a Web developer at <Link className="secondary-color-theme" underline="hover" href="https://www.ibm.com/us-en?ar=1" target={"_blank"} variant="h6">IBM</Link> working on enhancing customers&apos; experience.
            </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className={styles.profileDiv}>
              <CardMedia
                sx={{maxWidth:"25rem",height:"auto"}}
                className={styles.profilePic}
                component="img"
                image="profilePic.jpg"
                alt="profile picture"
              />
          </div>
            
        </Grid>
      </Grid>
      <Grid container className={matches ?"grid-row-5":"grid-row-3"} alignItems={"center"}>
        <Grid item xs={12} md={6} lg={6} className={styles.card}>
          <CustomLink href="/work/ibm" variant="subtitle1">
            <Card className={styles.cardContent} sx={{backgroundColor:"#b7bcd5"}}>
              <div className={styles.ibmImage}>
                <CardMedia
                    sx={{width:"70%",height:"auto"}}
                    component="img"
                    image="ibmWork.png"
                    alt="ibm work picture"
                  />
              </div>
            </Card>
          </CustomLink>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={styles.card}>
          <div className="grid-row-1">
            <Typography variant={"h6"} fontWeight={700}>
              IBM
            </Typography>
          </div>
          <div>
            <Chip className={styles.chipIcon} icon={<Computer sx={{fill: "black"}}/>} label="Web app" />
            <Chip className={styles.chipIcon} icon={<CodeOff sx={{fill: "black"}}/>} label="Full stack"/>
            <Chip className={styles.chipIcon} icon={<Icon><Image alt="react" src="/reactIcon.png" height={25} width={25} /></Icon>} label="React"/>
            <Chip className={styles.chipIcon} icon={<Javascript sx={{fill:"black"}}/>} label="NodeJs"/>
          </div>
          <div className="grid-row">
            <Typography variant={"body1"}>
              Full stack developer - Current 
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{paddingBottom:"5rem"}} alignItems={"center"}  direction={matches ? "row":"column-reverse"}>
        <Grid item xs={12} md={6} lg={6} className={styles.card}>
          <div className="grid-row">
            <Typography variant={"h6"} fontWeight={700}>
              MTH Replacement
            </Typography>
          </div>
          <div>
            <Chip className={styles.chipIcon} icon={<Devices sx={{fill: "black"}}/>} label="Cross app"/>
            <Chip className={styles.chipIcon} icon={<Icon><Image alt="react icon" src="/reactIcon.png" height={25} width={25} /></Icon>} label="React native"/>
          </div>
          <div className="grid-row">
            <Typography variant={"body1"}>
              React native app - COMING SOON
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={styles.card}>
          <CustomLink href="/work/mth" variant="subtitle1">
            <Card className={styles.cardContent} sx={{backgroundColor:"#b7bcd5"}}>
              <div className={styles.ibmImage}>
               
              </div>
            </Card>
          </CustomLink>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        "fontFamily": `"Poppins" , sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }   
});
theme = responsiveFontSizes(theme);

type Props = {children?:any}

const Layout = ({children}:Props) => {
    return (  
            <ThemeProvider theme={theme}>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="canonical" href="https://www.roeltijerina.com/"/>
                    {/* Google */}
                    <meta name="author" content="Roel Tijerina"/>
                    <meta name="description" content="Roel Tijerina's personal website. Software engineer based from Texas working as a full stack engineer at IBM. Currently using React, NodeJs, and expressJs." />

                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/> 
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                </Head>
                <div className="content">
                    <Navbar/>
                    {children}
                    <Footer/>
                </div>
            </ThemeProvider>   
    );
}
 
export default Layout;
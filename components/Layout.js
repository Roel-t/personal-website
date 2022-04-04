import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
const Layout = ({children}) => {
    return (  
        <>
            <Head>
                <meta name="description" content="Roel's personal website" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </Head>
            <div className="content">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
        
    );
}
 
export default Layout;
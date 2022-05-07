import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import {IconButton, Theme } from '@mui/material';
import CustomLink from './CustomLink';
import React, { useState,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRouter,Router } from "next/dist/client/router";

type Props = {}

const Navbar = (props:Props) => {
    const router = useRouter();
    const [navMenuShow, setNavMenuShow] = useState<boolean>(false);

    const onNavBtnClickHandler = ():void =>{
        setNavMenuShow(!navMenuShow);
    }
    
    Router.events.on('routeChangeComplete', () => {
        if(navMenuShow)
            setNavMenuShow(false);
    })

    const matches = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
    <section className="navbar">
        <div className="nav-content">
            <div className="nav-logo">
                <CustomLink href="/" variant="subtitle1" className="primary-color-text">
                    <Typography variant='subtitle1' fontWeight={600}>
                        Roel<span className='secondary-color-theme'>Tijerina</span>
                    </Typography>
                </CustomLink>
            </div>
            {matches ? 
            ( <div className="nav-links">
                <div className="nav-home">
                    <CustomLink href="/" variant="subtitle1" className="primary-color-text">
                    <Typography variant='subtitle1' fontWeight={500}>
                        Home
                    </Typography>
                    </CustomLink>
                </div>
                <div className="nav-about">
                    <CustomLink href="/about" variant="subtitle1" className="primary-color-text">
                    <Typography variant='subtitle1' fontWeight={500}>
                        About
                    </Typography> 
                    </CustomLink>
                </div>
                <div className="nav-contact">
                    <CustomLink href="/contact" variant="subtitle1" className="primary-color-text">
                    <Typography variant='subtitle1' fontWeight={500}>
                        Contact
                    </Typography>
                    </CustomLink>
                </div>
            </div>)
            :
            (<div className="nav-menu"> 
                <IconButton color="inherit" onClick={onNavBtnClickHandler} aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
            </div>)}
        </div>
    
      
        <CSSTransition in={navMenuShow}
        timeout={500}
        classNames={"nav-menu-overlay"}
        unmountOnExit={true}
        mountOnEnter={true} >
            <div className="nav-menu-overlay">
                <div className="nav-links-list">
                    <div className="nav-home-list">
                        <CustomLink href="/" onClick={onNavBtnClickHandler} variant="subtitle1" className="primary-color-text">
                        <Typography variant='h5' fontWeight={600}>
                            Home
                        </Typography>
                        </CustomLink>
                    </div>
                    <div className="nav-about-list">
                        <CustomLink href="/about" onClick={onNavBtnClickHandler} variant="subtitle1" className="primary-color-text">
                        <Typography variant='h5' fontWeight={600}>
                            About
                        </Typography> 
                        </CustomLink>
                    </div>
                    <div className="nav-contact-list">
                        <CustomLink href="/contact" onClick={onNavBtnClickHandler} variant="subtitle1" className="primary-color-text">
                        <Typography variant='h5' fontWeight={600}>
                            Contact
                        </Typography>
                        </CustomLink>
                    </div>
                </div>
            </div>
        </CSSTransition>  
    </section>);
}
 
export default Navbar;
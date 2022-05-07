import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import {IconButton, Theme } from '@mui/material';
import CustomLink from './CustomLink';
import { useState } from 'react';

type Props = {}

const Navbar = (props:Props) => {

    const [navMenuShow, setNavMenuShow] = useState<boolean>(false);

    const onNavBtnClickHandler = ():void =>{
        setNavMenuShow(!navMenuShow);
    }

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
        {navMenuShow ? 
        (<div style={{position:"fixed",width:"100%",height:"100%",backgroundColor:"red"}}>

        </div>)
        :(<></>)}
    </section>);
}
 
export default Navbar;
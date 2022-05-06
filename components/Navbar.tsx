import useMediaQuery from '@mui/material/useMediaQuery';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CustomLink from './CustomLink';

type Props = {}

const Navbar = (props:Props) => {
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
            <div className="nav-links">
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
            </div>
        </div>
    </section>);
}
 
export default Navbar;
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CustomLink from './CustomLink';
import {Grid, Link as MUILink} from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';

type Props = {}

const Footer = (props: Props) => {
    return (
    <section className="footer primary-background-color-theme">
        <Grid container justifyContent="center" className="footer-content">
            <Grid item>
                <MUILink target="_blank" href={"https://www.linkedin.com/in/roel-tijerina"} variant="subtitle1">
                    <LinkedInIcon className="footer-links"/>
                </MUILink>
                <CustomLink href="/contact" variant="subtitle1">
                    <EmailOutlined className="footer-links"/>
                </CustomLink>
            </Grid>
        </Grid>
    </section>);
}
 
export default Footer;





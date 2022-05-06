import { Typography } from "@mui/material";
import CustomLink from "../components/CustomLink";
import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div className="not-found">
        <Typography>
            Ooops...
        </Typography>
        <Typography>
            That page cannot be found :(
        </Typography>
        <Typography>
            Go back to the <CustomLink href="/" variant="subtitle1">Homepage</CustomLink>
        </Typography>
        
    </div>
  );
}
 
export default NotFound;
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Grid container justifyContent={'center'}>
        <span>CopyRight <CopyrightIcon fontSize='small' color='black'></CopyrightIcon>2011-2023 Sabka Bazaar pvt ltd</span>
      </Grid>
    </footer>
  );
}

export default Footer;
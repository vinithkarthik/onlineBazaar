import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ButtonComp = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.palette.primary[500],
  '&:hover': {
    backgroundColor: theme.palette.primary[700],
  },
}));

export default ButtonComp;

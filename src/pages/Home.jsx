import { useNavigate } from 'react-router-dom';
//Material UI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Image from '../assets/phone.webp';

const Home = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:600px)');


  return (
    <Box sx={{
      height: '100vh',
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-reapet',
      backgroundPosition: 'center ',
      bgColor: '#0ac7ed',
      
    }}>
    <Container
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 20,
      }}
    >
      
      <Typography
        component="h1"
        variant="h3"
        sx={{
          fontSize: `${matches ? '60px' : '48px'}`,
          textAlign: 'center',
          marginBottom: 3,
          color: '#fff',
        }}
      >
        Welcome to PhoneBook!
      </Typography>

      <Button
        type="button"
        variant="contained"
        size="large"
        onClick={() => {
          navigate('/register');
        }}
      >
        Get started
      </Button>
      
    </Container>
    </Box>
  );
};

export default Home;

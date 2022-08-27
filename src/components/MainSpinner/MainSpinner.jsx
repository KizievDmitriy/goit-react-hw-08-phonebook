import { PuffLoader } from 'react-spinners';
//Material UI
import Container from '@mui/material/Container';

export const MainSpinner = () => {
  return (
    <Container
      component="div"
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PuffLoader size={150} color="#17d4fa" cssOverride={{}} />
    </Container>
  );
};

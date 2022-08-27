import { useSelector } from 'react-redux';
//Material UI
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
//Local import
import { getAuthName } from 'redux/authUser/authSelectors';
import { useLogOutMutation } from 'redux/api';

export const UserMenu = () => {
  const userName = useSelector(getAuthName);

  const [logOut] = useLogOutMutation();

  const handleLogOut = () => {
    logOut();
  };
  
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
      }}
    >
      <Typography component="span" sx={{color: '#fff', fontSize: '12px'}}>
          Hello {userName}
        </Typography>
        <Avatar sx={{
          bgcolor: 'transparent',
          color: '#ffffff',
          cursor: 'pointer',
          '&:hover': {
            bgcolor: '#658dcd',
          },
        }} />
        
      
      <IconButton
        type="button"
        aria-label="logout"
        onClick={handleLogOut}
        sx={{
          color: '#fff',
          '&:hover': {
            bgcolor: '#658dcd',
          },
        }}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

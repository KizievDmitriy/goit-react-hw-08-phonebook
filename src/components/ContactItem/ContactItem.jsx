import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
//Material UI
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
//Local import
import { Spinner } from '../Spinner/Spinner';
import { useDeleteContactMutation } from 'redux/api';

const ContactItem = ({ contact: { id, name, number } }) => {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isLoadingDelete, isSuccess }] =
    useDeleteContactMutation();
  // console.log(JSON.parse( number ));
  useEffect(() => {
    return () => {
      if (isSuccess) {
        Notiflix.Notify.failure(
          `You have removed ${name} from your list`
        );
      }
    };
  }, [name, isSuccess]);
  
  return (
    <>
      <Box
        component="li"
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography component="p" variant="span" sx={{ width: '45%', fontWeight: '500', color: '#7a7a7a' }}>
          {name.toUpperCase()}
        </Typography>
        <Link href={"tel:+"+JSON.parse( number ) } underline="hover" sx={{ textAlign: 'left', fontWeight: '500', color: '#7a7a7a'}}>
          {number}
        </Link>
        
        <IconButton
          aria-label="edit"
          onClick={() => navigate(`/contacts/edit/${id}`)}
          sx={{
            marginLeft: 'auto',
            '&:hover, &:focus': { bgcolor: '#9ddb8c', color: '#1a821a' },
          }}
        >
          <EditIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          onClick={() => deleteContact(id)}
          disabled={isLoadingDelete}
          sx={{
            marginLeft: '3px',
            '&:hover, &:focus': { bgcolor: '#f3dacf', color: '#d31616' },
          }}
        >
          {!isLoadingDelete ? <DeleteIcon /> : <Spinner size={20} />}
        </IconButton>
      </Box>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;

import Notiflix from 'notiflix';

export const validationPhone = phone => {
  if (phone.length < 7 || phone === '') {
    Notiflix.Notify.warning('Phone must have 7 character min');
    return true;
  } else {
    return false;
  }
};

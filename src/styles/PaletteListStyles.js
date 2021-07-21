import svg from '../assets/background.svg';
import sizes from '../sizes';

export default {
  '@global': {
    '.item-exit': {
      opacity: 1,
    },
    '.item-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-in',
    },
  },
  root: {
    backgroundColor: 'purple',
    height: '100vh',
    display: 'flex',
    overflowY: 'scroll',
    alignItems: 'flex-start',
    justifyContent: 'center',
    background: `url(${svg})`,
  },
  container: {
    width: '65%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [sizes.down('md')]: {
      width: '80%',
    },
    [sizes.down('sm')]: {
      width: '90%',
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    fontSize: '1rem',
    '& a': {
      color: 'white',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  palettes: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [sizes.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 45%)',
    },
  },
};

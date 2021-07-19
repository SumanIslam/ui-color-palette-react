import sizes from '../sizes';

export default {
  palette: {
    height: '100vh',
    overflow: 'hidden',
  },
  colors: {
    height: '87vh',
  },
  goBack: {
    background: 'black',
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.33%',
    },
    [sizes.down('md')]: {
      width: '33.33%',
      height: '25%',
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
  backButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    border: '2px solid #ffffff33',
    borderRadius: '5px',
    padding: '0.4rem 1.8rem',
    fontSize: '1.1rem',
    cursor: 'pointer',
    textTransform: 'capitalize',
    textDecoration: 'none',
  },
};

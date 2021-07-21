import sizes from '../sizes';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '-5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.3)',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('md')]: {
      width: '33.33%',
      height: '14.28%',
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5.07%',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    fontSize: '13px',
    letterSpacing: '1px',
    padding: '10px',
    color: 'rgba(0,0,0,0.5)',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [sizes.down('xs')]: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  deleteIcon: {
    transition: 'all 0.4s ease-in-out',
  },
};

export default styles;

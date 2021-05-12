export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '120px',
    width: '100%',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  miniColorBox: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    marginBottom: '-4px',
  },
};

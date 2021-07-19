export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1,
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
  deleteIcon: {
    color: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    padding: '0.2rem 0.4rem',
    opacity: 0,
  },
};

import sizes from '../sizes';

export default {
  colorBox: {
    width: '20%',
    height: (props) => (props.showMore ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1,
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: (props) => (props.showMore ? '20%' : '50%'),
    },
    [sizes.down('md')]: {
      width: '33.33%',
      height: (props) => (props.showMore ? '14.28%' : '50%'),
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: (props) => (props.showMore ? '10%' : '50%'),
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: (props) => (props.showMore ? '5%' : '10%'),
    },
  },
  textColor: {
    color: (props) =>
      props.rgbArray[0] * 0.299 + props.rgbArray[1] * 0.587 + props.rgbArray[2] * 0.114 > 186
        ? '#000000cc'
        : '#fff',
  },
  seeMore: {
    color: (props) =>
      props.rgbArray[0] * 0.299 + props.rgbArray[1] * 0.587 + props.rgbArray[2] * 0.114 > 186
        ? '#000000cc'
        : '#fff',
    position: 'absolute',
    bottom: '0',
    right: '0',
    background: 'rgba(255,255,255,.3)',
    padding: '0.2rem 0.8rem',
  },
  copyButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    color: (props) =>
      props.rgbArray[0] * 0.299 + props.rgbArray[1] * 0.587 + props.rgbArray[2] * 0.114 > 186
        ? '#000000cc'
        : '#fff',
    border: (props) =>
      props.rgbArray[0] * 0.299 + props.rgbArray[1] * 0.587 + props.rgbArray[2] * 0.114 > 186
        ? '2px solid #00000080'
        : '2px solid #ffffff33',
    borderRadius: '5px',
    padding: '0.4rem 1.8rem',
    fontSize: '1.1rem',
    cursor: 'pointer',
    opacity: 0,
    transition: 'all .2s ease-out',
  },
  boxContent: {
    position: 'absolute',
    left: '0.3rem',
    bottom: '0.3rem',
    fontSize: '13px',
    letterSpacing: '1px',
  },
  copyOverlay: {
    height: '100%',
    width: '100%',
    opacity: '0',
    zIndex: '0',
    transition: 'transform 0.5s ease-in-out',
  },
  showOverlay: {
    position: 'absolute',
    opacity: '1',
    zIndex: '10',
    transform: 'scale(50)',
  },
  copyMessage: {
    opacity: '0',
    zIndex: '0',
    position: 'fixed',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3.5rem',
    transform: 'scale(0.1)',
    color: '#fff',
    '& h1': {
      fontWeight: '400',
      display: 'block',
      width: '100%',
      textAlign: 'center',
      background: (props) =>
        props.rgbArray[0] * 0.299 + props.rgbArray[1] * 0.587 + props.rgbArray[2] * 0.114 > 186
          ? 'rgba(90, 88, 88, 0.3)'
          : 'rgba(255,255,255,.3)',
      padding: '1rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginTop: '-3rem',
    },
  },
  showMessage: {
    opacity: '1',
    zIndex: '10',
    transform: 'scale(1)',
    transition: 'all 0.5s ease-in-out 0.3s',
  },
};

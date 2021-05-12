export default {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '7vh',
  },
  logo: {
    display: 'inline-block',
    background: '#eceff1',
    padding: '0 1rem',
    marginRight: '1rem',
    height: '45px',
    lineHeight: '39px',
    fontSize: '150%',
    fontWeight: '500',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    '& span': {
      fontWeight: '500',
    },
  },
  slider: {
    width: '200px',
    margin: '0 1rem',
    '& .rc-slider-rail': {
      height: '12px',
    },
    '& .rc-slider-track': {
      background: 'transparent',
    },
    '& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:focus,.rc-slider-handle:active':
      {
        background: 'green',
        outline: '0',
        border: '2px solid green',
        boxShadow: 'none',
        width: '20px',
        height: '20px',
        marginTop: '-3.9px',
      },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};

import sizes from '../sizes';

const drawerWidth = 300;
const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  // custom styles
  textAlignCenter: {
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '1rem',
  },
  buttonFontsize: {
    fontSize: '0.75rem',
    [sizes.down('xs')]: {
      fontSize: '0.5rem',
    },
  },
  chromePicker: {
    display: 'block',
    margin: '0 auto',
  },
  textValidator: {
    display: 'block',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  buttonCenter: {
    display: 'block',
    margin: '0 auto',
  },
  typographyFontSize: {
    [sizes.down('xs')]: {
      fontSize: '90%',
    },
  },
  toolbarButton: {
    marginLeft: 'auto',
    display: 'flex',
    '& a': {
      textDecoration: 'none',
    },
  },
});

export default styles;

// dependencies
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';

const PaletteFormNav = (props) => {
  const { classes, open, handleDrawerOpen, submitPallete, palettes } = props;
  return (
    <div>
      <CssBaseline />
      {/* app bar goes here */}
      <AppBar
        position="fixed"
        color="default"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* app bar title and buttons goes here */}
          <Typography variant="h6" color="inherit" noWrap>
            Create A Palette
          </Typography>

          <div className={classes.toolbarButton}>
            <Link to="/">
              <Button style={{ marginRight: '0.5rem' }} variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
            <PaletteMetaForm classes={classes} submitPallete={submitPallete} palettes={palettes} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;

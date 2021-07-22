// dependencies
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  state = {
    open: false,
    deletingId: '',
  };

  openDialogue = (id) => {
    this.setState({ open: true, deletingId: id });
  };

  closeDialogue = () => {
    this.setState({ open: false });
  };

  handleDelete = () => {
    const { deletingId } = this.state;
    const { deletePalette } = this.props;

    this.setState({ open: false }, deletePalette(deletingId));
  };

  goToPalette(id) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { open } = this.state;
    const { classes, palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create New palette</Link>
          </div>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} timeout={500} classNames="item">
                <MiniPalette
                  key={palette.id}
                  id={palette.id}
                  {...palette}
                  goToPalette={this.goToPalette}
                  openDialogue={this.openDialogue}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog open={open} aria-labelledby="delete-dialog-title" onClose={this.closeDialogue}>
          <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
          <List>
            <ListItem onClick={this.handleDelete} style={{ cursor: 'pointer' }}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem onClick={this.closeDialogue} style={{ cursor: 'pointer' }}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);

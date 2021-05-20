import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    cursor: 'pointer',
  },
};

const DraggableColorBox = ({ color, classes }) => (
  <div className={classes.root} style={{ backgroundColor: color }}>
    {color}
  </div>
);

export default withStyles(styles)(DraggableColorBox);

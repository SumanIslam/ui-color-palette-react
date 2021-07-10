import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.3)',
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
  },
  deleteIcon: {
    transition: 'all 0.4s ease-in-out',
  },
};

const DraggableColorBox = ({ color, name, classes }) => (
  <div className={classes.root} style={{ backgroundColor: color }}>
    <div className={classes.boxContent}>
      <span>{name}</span>
      <DeleteIcon className={classes.deleteIcon} />
    </div>
  </div>
);

export default withStyles(styles)(DraggableColorBox);

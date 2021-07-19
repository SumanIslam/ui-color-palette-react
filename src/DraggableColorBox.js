import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBox';

const DraggableColorBox = SortableElement(({ color, name, classes, handleClick }) => (
  <div className={classes.root} style={{ backgroundColor: color }}>
    <div className={classes.boxContent}>
      <span>{name}</span>
      <DeleteIcon className={classes.deleteIcon} onClick={() => handleClick(name)} />
    </div>
  </div>
));

export default withStyles(styles)(DraggableColorBox);

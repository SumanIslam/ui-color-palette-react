import { SortableContainer } from 'react-sortable-hoc';
import { v4 as uuidv4 } from 'uuid';
import DraggableColorBox from './DraggableColorBox';

// eslint-disable-next-line no-unused-vars
const DraggableColorList = SortableContainer(({ colors, removeColor, axis, onSortEnd }) => (
  <div style={{ height: '100%' }}>
    {colors.map((color, index) => (
      <DraggableColorBox
        index={index}
        key={uuidv4()}
        color={color.color}
        name={color.name}
        removeColor={removeColor}
      />
    ))}
  </div>
));

export default DraggableColorList;

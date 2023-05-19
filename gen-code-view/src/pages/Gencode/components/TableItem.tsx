import { CSSProperties, FC, memo } from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes'


const TableItem: React.FC = memo(({ item }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: ItemTypes.FOOD,
      item: item,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [item],
  )
  return (
    <div ref={drag} style={{ opacity }} key={item.tableName}>
      {`${item.tableName}(${item.desc})`}
    </div>
  );
});
export default TableItem;

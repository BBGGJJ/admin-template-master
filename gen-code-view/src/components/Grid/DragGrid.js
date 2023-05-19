import React, { useState, useCallback, useRef } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const RNDContext = createDndContext(HTML5Backend);

const type = 'DragableBodyRow';

const DragableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
  const ref = React.useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: item => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    item: { type, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

class DragGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: {
        current: 1,
        pageNumber: 1,
        pageSize: 10,
        total: 0,
      },
      params: props.params || {},
      loading: false,
    };
  }
  render() {
    const components = {
      body: {
        row: DragableBodyRow,
      },
    };

    const moveRow = useCallback(
      (dragIndex, hoverIndex) => {
        const dragRow = data[dragIndex];
        setData(
          update(data, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragRow],
            ],
          }),
        );
      },
      [data],
    );
    const manager = useRef(RNDContext);
    return (
      <DndProvider manager={manager.current.dragDropManager}>
        <Table
          columns={columns}
          dataSource={data}
          components={components}
          onRow={(_, index) => ({
            index
            moveRow,
          })}
        />
      </DndProvider>
    );
  }
};

export default DragSortingTable;

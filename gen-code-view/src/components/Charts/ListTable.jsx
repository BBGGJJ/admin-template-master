import React from 'react';
import styles from './index.less';

const defaultData = [
  {
    Date: '2015-02',
    count: 1276,
    max: 1000,
    min: 0,
    avg: 102,
  },
];
const fieldItem = [
  {
    fieldDesc: '日期',
    fieldName: 'Date',
    status: true,
    key: 'Date',
  },
  {
    fieldDesc: '总数',
    fieldName: 'count',
    status: true,
    key: 'count',
  },
  {
    fieldDesc: '最大',
    fieldName: 'max',
    status: true,
    key: 'max',
  },
  {
    fieldDesc: '最小',
    fieldName: 'min',
    status: true,
    key: 'min',
  },
  {
    fieldDesc: '平均',
    fieldName: 'avg',
    status: true,
    key: 'avg',
    joinField: 'min',
  },
  {
    fieldDesc: '其它',
    fieldName: 'avg',
    status: false,
    key: 'avg',
  },
];
const BaseArea = (props) => {
  let datasource = defaultData[0];
  if (props.data && props.data.length > 0) {
    datasource = props.data[0] || {};
  }
  let tmpColumn = fieldItem;
  if (props.fieldItem && props.fieldItem.length > 0) {
    tmpColumn = props.fieldItem;
  }
  const fieldMap = {};
  const joinFields = [];
  const column = tmpColumn
    .filter((e) => e.status)
    .map((v) => {
      const result = { title: v.fieldDesc, dataIndex: v.fieldName, joinField: v.joinField };
      fieldMap[v.fieldName] = result;
      if (v.joinField) {
        joinFields.push(v.joinField);
      }
      return result;
    });
  const newColumn = column.filter((e) => joinFields.indexOf(e.dataIndex) < 0);
  return (
    <div className={styles.groups}>
      {newColumn.map((e) => (
        <div key={e.fieldName} className={styles.grid}>
          <p className={styles.gridTitle}>{e.title}</p>
          <p className={styles.gridCenter}>{datasource[e.dataIndex]}</p>
          <p className={styles.gridFooter}>
            {e.joinField ? (
              <>
                <span>{fieldMap[e.joinField].title}:</span>
                <span>{datasource[fieldMap[e.joinField].dataIndex]}</span>
              </>
            ) : (
              <></>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BaseArea;

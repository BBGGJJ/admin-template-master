const ColumnRenderMap = {
  default: (value) => {
    return value + '';
  },
  mappData: (value, dataIndex, mapp) => {
    return (mapp[dataIndex] || {})[value] || '';
  }
}


export default ColumnRenderMap;

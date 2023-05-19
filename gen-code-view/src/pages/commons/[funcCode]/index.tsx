import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Button, Modal, Space, Form, message, Row, Col, Divider } from 'antd';
import { history } from 'umi';
import Grid from './Grid';
import { PageContainer } from '@ant-design/pro-layout';
import SearchForm from './SearchForm';
import EditForm from './EditForm';
import { queryFuncConfig, updateFuncData, saveFuncData, deleteFuncData } from '@/services/commons/FuncStore';
import ColumnRenderMap from '@/commons/ColumnRenderMap';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';


const { confirm } = Modal;

const response = (resp) => {
  const { data = [] } = resp;
  return data.map((e) => {
    return { value: e.value, label: e.label };
  });
};

const TableList: React.FC = (props) => {
  const [loadCode, setLoadCode] = useState('');
  const [mappData, setMappData] = useState({});
  const [columns, setColumns] = useState([]);
  const [defaultFormValue, setDefaultFormValue] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);
  const [rowData, setRowData] = useState({});
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);
  const [createSwitch, setCreateSwitch] = useState(false);
  const [primaryKey,setPrimaryKey] =useState('id');
  const gridRef = useRef();

  const [createForm] = Form.useForm();
  const queryParams = props.location.query;
  const funcCode = props.match.params.funcCode;

  const getMappData = () => {
    return mappData;
  }

  const fetchProps = async (funcCode) => {
    setLoadCode(funcCode);
    const result = await queryFuncConfig(funcCode);
    const { create = false, detail = false, edit = false, mappData = {}, propertyVos = [] } = result.data;
    const deleteBtn = result.data.delete;
    setMappData(mappData);
    setCreateSwitch(create);
    const defaultValue = {};
    const columnList = [];
    propertyVos.forEach(element => {
      const column = {
        title: element.propName,
        dataIndex: element.propKey,
        ...element,
      };
      if (element.defaultValue) {
        defaultValue[element.propKey] = element.defaultValue;
      }
      if (element.dataType == 3 || element.dataType == 1) {
        column.viewType = 'select';
        column.enums = mappData[element.propKey];
      }
      if(element.primaryKey){
        setPrimaryKey(element.propKey);
      }
      if (element.dataType == 2) {
        column.viewType = 'suggest';
        column.response = response;
        column.url = `/api/erp/boss/func/config/${funcCode}/${element.propKey}/suggest.do`;
      }
      columnList.push(column);
    });
    // {linkList.map((link) =>
    //   <>
    //     <a
    //       key={`${link.name}${record.id || ''}`}
    //       onClick={() => {
    //         const query = {};
    //         const paramItem = link.paramItem || [];
    //         paramItem.forEach((element) => {
    //           query[element.queryName] = record[element.fieldName] || null;
    //         });
    //         history.push({
    //           pathname: link.uri,
    //           query
    //         });
    //       }}
    //     >
    //       {link.name}
    //     </a>
    //   </>
    // )}
    setDefaultFormValue(defaultValue);
    columnList.push({
      title: '操作',
      dataIndex: 'option',
      //fixed: 'right',
      valueType: 'option',
      render: (_, record) => {
        const optionBtns = [];
        if (edit) {
          optionBtns.push(
            <a
              key={`edit${record.id || ''}`}
              onClick={() => {
                setRowData(record);
                createForm.setFieldsValue(record);
                setIsEdit(true);
                setAddVisible(true);
              }}
            >
              编辑
             </a>
          )
        }
        if (deleteBtn) {
          optionBtns.push(
            <a
              key={`delete${record.id || ''}`}
              onClick={() => {
                removeHadle(record);
              }}
            >
              删除
             </a>
          )
        }
        if (detail) {
          optionBtns.push(
            <a
              key={`view${record.id || ''}`}
              onClick={() => {
                viewDetailHeadle(record);
              }}
            >
              详情
           </a>
          )
        }

        return (
          <Space>
            {optionBtns}
          </Space>
        );
      }
    });
    setColumns(columnList);
    gridRef.current.fetch({ data: queryFromData });
  }
  useEffect(() => {
    if (loadCode !== funcCode) {
      fetchProps(funcCode);
    }
  });

  const linkList = [
    {
      uri: '/sys/dictTable',
      name: '字典详情',
      paramItem:
        [
          {
            queryName: 'id',
            fieldName: 'id',
          }
        ]
    }
  ];

  const submitHeadel = async (values) => {
    console.log(values);
    if (isEdit) {
       values[primaryKey] = rowData[primaryKey] || [];
      const result = await updateFuncData(funcCode, values);
      message.success('更新成功！');
    } else {
      const result = await saveFuncData(funcCode, values);
      message.success('保存成功！');
    }
    setAddVisible(false);
    gridRef.current.fetch({ data: queryFromData });
  }
  const onValuesChange = (value) => {
    setRowData({...rowData,...value});
  }
  const saveSubmit = () => {
    createForm.validateFields()
      .then(values => {
        const result=  submitHeadel(values);
        console.log(result);
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
  }
  const removeSubmit = async (record) => {
    const result = await deleteFuncData(funcCode, record.id);
    gridRef.current.reload({ data: queryFromData });
    message.success('删除成功');
  }
  const removeHadle = (record) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确定删除数据？',
      onOk() {
        removeSubmit(record);
      },
      okText: '确定',
      cancelText: '取消',
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const viewDetailHeadle = (rowData) => {
    setRowData(rowData);
    console.log(rowData);
    setDetailVisible(true);
  }
  const searchFormProp = {
    onSubmit: (obj) => {
      for (let v in obj) {
        if (!obj[v]) {
          obj[v] = null;
        }
      }
      setQueryFromData(obj);
      gridRef.current.fetch({ data: obj })
    }
  };
  if (createSwitch) {
    searchFormProp.clickAdd = () => {
      setRowData(defaultFormValue);
      setAddVisible(true);
      setIsEdit(false);
    }
  }
  return (
    <PageContainer>
      <Grid
        ref={gridRef}
        url={`/api/erp/boss/func/store/${funcCode}/pageList.do`}
        bordered
        title={() =>
          <SearchForm
            formData={queryParams}
            columns={columns}
            {...searchFormProp}
          />
        }
        columns={columns}
        params={queryParams}
      />
      <Modal
        title={isEdit ? '编辑对象' : '新增对象'}
        centered
        visible={addVisible}
        onOk={saveSubmit}
        onCancel={() => {
          setAddVisible(false);
        }}
        width={1000}
      >
        <EditForm
          form={createForm}
          columns={columns}
          onChange={onValuesChange}
          name="editForm"
          formData={rowData}
        />
      </Modal>
      <Modal
        title={'详情'}
        centered
        visible={detailVisible}
        onOk={() => {
          setDetailVisible(false);
        }}
        onCancel={() => {
          setDetailVisible(false);
        }}
        width={1000}
      >
        {columns.filter(e => e.dataIndex != 'option').map((e, index) => (
          <>
            <Row key={index}>
              <Col flex={2}>{e.title}</Col>
              <Col flex={3}>{rowData[e.dataIndex] || ''}</Col>
            </Row>
            <Divider />
          </>
        ))}
      </Modal>
    </PageContainer>
  );

}

export default TableList;

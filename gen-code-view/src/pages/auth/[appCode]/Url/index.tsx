import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Table, Input, Modal, Select, Radio, TreeSelect, Cascader, InputNumber, Switch, Slider, Checkbox, Rate, Upload, message } from 'antd';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import styles from './index.less';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { PageContainer } from '@ant-design/pro-layout';
import Grid from '@/components/Grid';
import Suggest from '@/components/Suggest';
import request from '@/utils/request';
import { IconMap, EnumsMapp } from '@/commons/enums';
import { updateIndex, deleteUrl, updateUrl, saveUrl } from '@/services/auth/url';
import TagMap from '@/commons/TagMap';

const RNDContext = createDndContext(HTML5Backend);
const { Option } = Select;
const { confirm } = Modal;



const type = 'DragableBodyRow';

const iconList = Object.keys(IconMap).map(item => <Option key={item} value={item}>{IconMap[item]}</Option>);

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
      key={`tr${index}`}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'url路径',
    dataIndex: 'path',
  },
  {
    title: '权限编码',
    dataIndex: 'uriCode',
  },
  {
    title: '图标',
    dataIndex: 'icon',
    render: (value, record) => {
      return IconMap[value] || value || '';
    },
  },
  {
    title: 'uri类型',
    dataIndex: 'type',
    render: TagMap['sysUrlTypeEnum'],
  },
  {
    title: '权限名称',
    dataIndex: 'uriName',
  },
  {
    title: '权限描述',
    dataIndex: 'uriDescription',
  },
  {
    title: '功能编码',
    dataIndex: 'funcCode',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
  },
];
const defaultData = {
  appCode: null,
  childs: null,
  funcCode: null,
  icon: "list",
  id: null,
  index: 1,
  parentId: 0,
  path: null,
  type: 1,
  typeDesc: null,
  uriCode: null,
  uriDescription: null,
  uriName: null,
}
const TableList: React.FC = (props) => {
  const [data, setData] = useState([]);
  const [loadCode, setLoadCode] = useState(0);
  const [parentList, setParentList] = useState([]);
  const [parentData, setParentData] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [queryParam, setQueryParam] = useState({});
  const [level, setLevel] = useState(1);
  const appCode = props.match.params.appCode;
  const [page, setPage] = useState({
    current: 1,
    pageNumber: 1,
    pageSize: 20,
    total: 0,
  });
  const gridRef = useRef();
  const [createForm] = Form.useForm();
  const tempColumns = [...columns];
  tempColumns.push({
    title: '操作',
    dataIndex: 'option',
    fixed: 'right',
    width: 250,
    valueType: 'option',
    render: (_, record) => (
      <Space>
        <a
          key={`edit${record.id || ''}`}
          onClick={() => {
            setRowData(record);
            setIsEdit(true);
            setAddVisible(true);
            createForm.setFieldsValue(record);
          }}
        >
          编辑
        </a>
        <a
          key={`delete${record.id || ''}`}
          onClick={() => {
            removeHadle(record);
          }}
        >
          删除
       </a>
        {level < 3
          ?
          <a
            key={`view${record.id || ''}`}
            onClick={() => {
              setCurrData(record.childs || []);
              setLevel(level + 1);
              const tempParentList = [...parentList];
              tempParentList.push(record)
              setParentList(tempParentList);
              const tempParentData = [...parentData];
              tempParentData.push(currData);
              setParentData(tempParentData);
            }}
          >{'管理子权限'}
          </a>
          :
          ''
        }
      </Space>
    ),
  });

  useEffect(() => {
    if (loadCode !== appCode) {
      fetch({});
    }
  });

  const components = {
    body: {
      row: DragableBodyRow,
    },
  };
  const fetch = (params = {}) => {
    setLoadCode(appCode);
    setQueryParam(params);
    setLoading(true);
    const reqParam = { ...params };
    for (const k in params) {
      const value = params[k];
      if (value) {
        reqParam[k] = value;
      }
    }
    reqParam.page = page;
    reqParam.appCode = appCode;
    return request("/api/erp/boss/auth/uri/queryTree.do", {
      method: 'POST',
      data: reqParam,
    }).then((result) => {
      const data = result.data || [];
      setLoading(false);
      setData(data);
      setCurrData(data);
    });
  };
  const updateIndexSubmit = async (params) => {
    const result = await updateIndex(params);
  }
  const onValuesChange = (value) => {
    setRowData({ ...rowData, ...value });
  }
  const removeSubmit = async (record) => {
    if (record.childs && record.childs.length > 0) {
      message.error('请先删除子权限');
      return;
    }
    const result = await deleteUrl(record.id);
    let parent = {};
    if (parentList && parentList.length > 0) {
      parent = parentList[parentList.length - 1]
      const childs = parent.childs.filter(item => item.id !== record.id);
      parent.childs = childs;
      setCurrData(childs);
    } else {
      const tempData = [...data].filter(item => item.id !== record.id);
      setData(tempData);
      setCurrData(tempData);
    }
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
  const clickAdd = () => {
    setRowData({});
    createForm.setFieldsValue(defaultData);
    setIsEdit(false);
    setAddVisible(true);
    setShowValidate(false);
  }
  const saveSubmit = () => {
    createForm.validateFields()
      .then(values => {
        submitHeadel(values);
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
  }
  const submitHeadel = async () => {
    const params = createForm.getFieldValue();
    params.appCode = appCode;
    if (isEdit) {
      const result = await updateUrl(params);
      message.success('更新成功！');
    } else {
      let parentId = 0;
      let parent = {};
      if (parentList && parentList.length > 0) {
        parent = parentList[parentList.length - 1]
        parentId = parent.id;
        const childs = parent.childs || [];
      }
      params.parentId = parentId;
      const result = await saveUrl(params);
      if (parentList && parentList.length > 0) {
        const childs = parent.childs || [];
        childs.push(result.data);
        parent.childs = childs;
        setCurrData(childs);
      } else {
        const tempData = [...data];
        tempData.push(result.data);
        setData(tempData);
        setCurrData(tempData);
      }
      // const list = [...currData];
      // list.push(result.data);
      // setCurrData(list);
      message.success('保存成功！');
    }
    setAddVisible(false);
  }
  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = currData[dragIndex];
      const tempData = update(currData, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRow],
        ],
      });
      setCurrData(tempData);
      let i = 0;
      const params = tempData.map(e => {
        i = i + 1
        return { id: e.id, index: i, appCode }
      })
      updateIndexSubmit(params);
      if (parentList && parentList.length > 0) {
        parent = parentList[parentList.length - 1]
        parent.childs = tempData;
      }
    },
    [currData],
  );

  const manager = useRef(RNDContext);
  return (
    <PageContainer>
      <DndProvider manager={manager.current.dragDropManager}>
        <Table
          columns={tempColumns}
          dataSource={currData}
          title={() => {
            if (level > 1) {
              return <Button
                type="primary"
                key="itemResetBtn"
                onClick={() => {
                  setLevel(level - 1);
                  const tempParentData = [...parentData];
                  setCurrData(level > 1 ? tempParentData.pop() : data);
                  setParentData(tempParentData);
                  const tempParentList = [...parentList];
                  tempParentList.pop();
                  setParentList(tempParentList);
                }}
              >
                返回上一级
             </Button>
            }
            return null;
          }}
          components={components}
          onRow={(_, index) => ({
            index,
            moveRow,
          })}
          pagination={false}
          footer={() => (
            <Row gutter={24}>
              <Col
                span={24}
                style={{
                  textAlign: 'right',
                }}
              >
                <Space>
                  <Button
                    type="primary"
                    key="itemResetBtn"
                    onClick={() => clickAdd()}
                  >
                    新增权限
                 </Button>
                </Space>
              </Col>
            </Row>
          )}
        />
      </DndProvider>
      <Modal
        title={isEdit ? '编辑对象' : '新增对象'}
        centered
        visible={addVisible}
        onOk={saveSubmit}
        confirmLoading={loading}
        onCancel={() => {
          setShowValidate(false);
          setAddVisible(false);
        }}
        width={1000}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          form={createForm}
          layout="horizontal"
          initialValues={rowData}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="id" hidden={true} shouldUpdate>
            <Input />
          </Form.Item>
          <Form.Item
            name="uriName"
            label="权限名称"
            rules={[{ required: true, message: '请输入权限名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="uriCode"
            label="权限编码"
            rules={[{ required: true, message: '请输入权限编码' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="uriDescription"
            label="权限描述"
            rules={[{ required: true, message: '请输入权限描述' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="uri类型"
            rules={[{ required: true, message: '请选择值类型！' }]}
          >
            <Radio.Group options={EnumsMapp.sysUrlTypeEnum} optionType="button" />
          </Form.Item>
          {rowData.type == 3 ?
            <Form.Item
              name="funcCode"
              label="功能编码"
              rules={[{ required: true, message: '请输入功能编码' }]}
            >
              <Input />
            </Form.Item>
            :
            <Form.Item
              name="path"
              label="url路径"
              rules={[{ required: true, message: '请输入url路径' }]}
            >
              <Input />
            </Form.Item>
          }
          {rowData.type != 2
            ?
            <Form.Item
              name="icon"
              label="图标"
              rules={[{ required: true, message: '请选择图标' }]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
              >
                {iconList}
              </Select>
            </Form.Item>
            :
            ''
          }
        </Form>
      </Modal>
    </PageContainer>
  );
};

export default TableList;

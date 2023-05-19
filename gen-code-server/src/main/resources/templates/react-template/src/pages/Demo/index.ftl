!#parse
!#name /src/pages/${classInfo.businessModule?cap_first}/${classInfo.name}/index.jsx
!#list

import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, message, Input } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async fields => {
  const hide = message.loading('正在添加');

  try {
    await addRule({
      desc: fields.desc,
    });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async fields => {
  const hide = message.loading('正在修改');

  try {
    await updateRule({
	  <#list classInfo.columnList as fieldItem >
      ${fieldItem.beanAttr.name}:fields.${fieldItem.beanAttr.name},
      </#list>
    });
    hide();
    message.success('修改成功');
    return true;
  } catch (error) {
    hide();
    message.error('修改失败请重试！');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async selectedRows => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      ${classInfo.primaryKey.beanAttr.name}: selectedRows.map(row => row.${classInfo.primaryKey.beanAttr.name}),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    console.error(error);
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList = () => {
  const [sorter, setSorter] = useState('');
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef();
  const columns = [
	<#list classInfo.columnList as fieldItem >
		<#if !fieldItem.tableColumn.autoIncrement>
      {
        title: '${fieldItem.beanAttr.cnName}',
        dataIndex: '${fieldItem.beanAttr.name}',
		<#if fieldItem.viewAttr.inputType??>
		<#if fieldItem.viewAttr.inputType == 'textarea'>
		   valueType: 'textarea',
        </#if>
		<#if fieldItem.viewAttr.inputType == 'datatime'>
		   valueType: 'dateTime',
        </#if>
		<#if fieldItem.viewAttr.inputType == 'number'>
		   valueType: 'digit',
        </#if>
		<#if fieldItem.viewAttr.inputType == 'enum'>
		   valueEnum: ${fieldItem.viewAttr.inputEnumData!'{}'},
        </#if>
		<#if fieldItem.viewAttr.inputType == 'suggest'>
		   valueEnum: 'select',
        </#if>
		</#if>
		<#if fieldItem.viewAttr.switchType??>
		  valueEnum: {
			true: {
			  text: '开器',
			  status: 'Success',
			},
			false: {
			  text: '关闭',
			  status: 'Error',
			},
		  },
		</#if>
        },
		</#if>
  </#list>
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
           編輯
          </a>
        </>
      ),
    },
  ];
  return (
     <PageHeaderWrapper>
      <ProTable
        headerTitle="${classInfo.desc}"
        actionRef={actionRef}
        rowKey="${classInfo.primaryKey.beanAttr.name}"
        onChange={(_, _filter, _sorter) => {
          const sorterResult = _sorter;

          if (sorterResult.field) {
            setSorter(`${r"${sorterResult.field}_${sorterResult.order}"}`);
          }
        }}
        params={{
          sorter,
        }}
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 新建
          </Button>,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      action.reload();
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">批量删除</Menu.Item>
                  <Menu.Item key="approval">批量审批</Menu.Item>
                </Menu>
              }
            >
              <Button>
                批量操作 <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({selectedRowKeys = [], selectedRows = {} }) => (
          <div>
            已选择{' '}
            <a
              style={{
                fontWeight: 600,
              }}
            >
              {selectedRowKeys.length}
            </a>{' '}
            项&nbsp;&nbsp;

          </div>
        )}
        request={params => queryRule(params)}
        columns={columns}
        rowSelection={{}}
      />
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable
          onSubmit={async value => {
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          columns={columns}
          rowSelection={{}}
        />
      </CreateForm>
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async value => {
            const success = await handleUpdate(value);

            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageHeaderWrapper>
  );
};

export default TableList;

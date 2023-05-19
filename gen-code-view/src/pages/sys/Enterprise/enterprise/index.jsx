import { message } from 'antd';
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@/components/ProTable';

import {createEnterprise, deleteEnterprise, updateEnterprise } from '@/services/config/enterprise';

const pageUrl='/api/config/enterprise/pageList.do'

const handleAdd = async fields => {
  const hide = message.loading('正在添加');

  try {
    await createEnterprise({ ...fields });
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
  const hide = message.loading('正在配置');
  try {
    await updateEnterprise({
  id: fields.id,
  cnName: fields.cnName,
  joinDate: fields.joinDate,
  country: fields.country,
  province: fields.province,
  city: fields.city,
  area: fields.area,
  street: fields.street,
  addres: fields.addres,
  industryId: fields.industryId,
  status: fields.status,
  createTime: fields.createTime,
  updateTime: fields.updateTime,
  version: fields.version,
  enterpriseScale: fields.enterpriseScale,
  annualValue: fields.annualValue,
  });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async record => {
  const hide = message.loading('正在删除');
  if (!record) return true;

  try {
    await deleteEnterprise({
    id: record.id,
  });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const ConfigEnterprise = () => {
  const columns = [
    {
      title: '唯一主键',
      dataIndex: 'id',
      hideInForm: true,
      hideInSearch: true,
      valueType: "digit",
    },
    {
      title: '企业名称',
      dataIndex: 'cnName',
          valueType: "text",
    rules: [
        {
            required: true,
            message: '企业名称为必填项',
        },
    ]
    },
    {
      title: '入住日期',
      dataIndex: 'joinDate',
      valueType: 'dateTime',
    rules: [
        {
            required: true,
            message: '入住日期为必填项',
        },
    ]
    },
    {
      title: '所属国家',
      dataIndex: 'country',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '所属国家为必填项',
        },
    ]
    },
    {
      title: '所在省份',
      dataIndex: 'province',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '所在省份为必填项',
        },
    ]
    },
    {
      title: '所在城市',
      dataIndex: 'city',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '所在城市为必填项',
        },
    ]
    },
    {
      title: '所在市区',
      dataIndex: 'area',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '所在市区为必填项',
        },
    ]
    },
    {
      title: '所在街道',
      dataIndex: 'street',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '所在街道为必填项',
        },
    ]
    },
    {
      title: '地址',
      dataIndex: 'addres',
          valueType: "text",
    rules: [
        {
            required: true,
            message: '地址为必填项',
        },
    ]
    },
    {
      title: '所属行业',
      dataIndex: 'industryId',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '所属行业为必填项',
        },
    ]
    },
    {
      title: '企业状态1未认证',
      dataIndex: 'status',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '企业状态1未认证为必填项',
        },
    ]
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      hideInForm: true,
      hideInSearch: true,
      valueType: 'dateTime',
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      hideInForm: true,
      hideInSearch: true,
      valueType: 'dateTime',
    },
    {
      title: '版本号',
      dataIndex: 'version',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '版本号为必填项',
        },
    ]
    },
    {
      title: '企业规模',
      dataIndex: 'enterpriseScale',
          valueType: "text",
    rules: [
        {
            required: true,
            message: '企业规模为必填项',
        },
    ]
    },
    {
      title: '年产值',
      dataIndex: 'annualValue',
      valueType: "digit",
    rules: [
        {
            required: true,
            message: '年产值为必填项',
        },
    ]
    },
  ];
  return (
    <PageHeaderWrapper>
      <ProTable
        columns={columns}
        removeSubmit={handleRemove}
        updateSubmit={handleUpdate}
        addSubmit={handleAdd}
        name='ConfigEnterpriseProTable'
        pageUrl={pageUrl}
        viewDetail={handleAdd}
        title='企业表'
      />
    </PageHeaderWrapper>
  );
};

export default ConfigEnterprise;

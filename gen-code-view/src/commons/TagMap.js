import {
  Tag
} from 'antd';

const SysUrlTypeMap = {
  1: <Tag color = "green" > 页面 </Tag>,
  2: <Tag color = "cyan" > 接口 </Tag>,
  3: <Tag color = "blue" > 功能 </Tag>
};
const funcViewTypeMap = {
  'input': <Tag color = "red" > 普通文本框 </Tag>,
  'number': <Tag color = "volcano" > 数字 </Tag>,
  'checkbox': <Tag color = "orange" > 复选框 </Tag>,
  'switch': <Tag color = "gold" > 开关 </Tag>,
  'datePicker': <Tag color = "lime" > 日期时间输入框 </Tag>,
  'timePicker': <Tag color = "green" > 时间输入框 </Tag>,
  'colorPicker': <Tag color = "cyan" > 颜色输入框 </Tag>,
  'upload': <Tag color = "blue" > 文件上传 </Tag>,
  'rate': <Tag color = "geekblue" > 推荐级别 </Tag>,
  'slider': <Tag color = "purple" > 滑块 </Tag>,
  'hidden': <Tag color = "#87d068" > 隐藏域 </Tag>,
  'TextArea': <Tag color = "#108ee9" > 大文本框 </Tag>,
};

const roleClassMap={
  1: <Tag color = "green" > 项目 </Tag>,
  2: <Tag color = "cyan" > 任务 </Tag>,
}

const funcDataTypeMap = [
   <Tag color = "geekblue"> 普通值 </Tag>,
   <Tag color = "green"> 枚举 </Tag>,
   <Tag color = "cyan"> 关联表 </Tag>,
   <Tag color = "blue"> 字典表数据 </Tag>
];
const enterpriseStatusMap = {
   1:<Tag color = "geekblue"> 未认证 </Tag>,
   2:<Tag color = "green"> 认证中 </Tag>,
   3:<Tag color = "cyan"> 已认证 </Tag>,
   4:<Tag color = "red"> 认证失败 </Tag>
};
const appsourceGroupMap = {
  'view': <Tag color = "geekblue" > 前端系统 </Tag>,
  'server': <Tag color = "blue" > 后端服务 </Tag>
};
const reportTaskLogTypeMap = {
  1: <Tag color = "geekblue" > 数据转换 </Tag>,
  2: <Tag color = "blue" > 报表统计 </Tag>
};
const reportTaskLogStatusMap = {
  1: <Tag color = "geekblue" > 成功 </Tag>,
  2: <Tag color = "blue" > 失败 </Tag>
};
const reportTaskDataTypeMap = {
  1: <Tag color = "geekblue" > 实体表 </Tag>,
  2: <Tag color = "blue" > 虚拟表 </Tag>
};
const reportDataInputMethodMap = {
  1: <Tag color = "geekblue" > 全量更新 </Tag>,
  2: <Tag color = "blue" > 全量更新 </Tag>
};
const reportDataStatusMap = {
  1: <Tag color = "green" > 成功 </Tag>,
  2: <Tag color = "red" > 失败 </Tag>
};
const dataSourceTypeMap = {
  1: <Tag color = "green" > MySql </Tag>,
  2: <Tag color = "red" > Oracle </Tag>,
  3: <Tag color = "red" > postersql </Tag>
};
const operatorLogTypeMap = {
  1: <Tag color = "green" > 新增 </Tag>,
  2: <Tag color = "cyan" > 修改 </Tag>,
  3: <Tag color = "blue" > 刪除 </Tag>,
  4: <Tag color = "purple" > 查詢 </Tag>
};
const messageStatusMap = {
  1: <Tag color = "green" > 待发送 </Tag>,
  2: <Tag color = "red" > 已发送 </Tag>
};
const messageNotifyTypeMap = {
  1: <Tag color = "green" > 立即发送 </Tag>,
  2: <Tag color = "red" > 延时发送 </Tag>
};
const levelMap = {
  1: <Tag color = "green" > 一级 </Tag>,
  2: <Tag color = "cyan" > 二级 </Tag>,
  3: <Tag color = "blue" > 三级 </Tag>,
  4: <Tag color = "purple" > 四级 </Tag>
};
const wxRoleAuthMap = {
  'all': <Tag color = "green" > 全部 </Tag>,
  'currEnterprise': <Tag color = "cyan" > 当前激活的企业 </Tag>,
  'correlation': <Tag color = "blue" > 当前激活企业邀请的的企业 </Tag>
};
const TagMap = {
  'default': (value) => {
    return value;
  },
  yesnoStatusEnum: (value) => {
    if (value) {
      return <Tag color = "green" > 是 </Tag>
    }
    return <Tag color = "red" > 否 </Tag>
  },
  startStatusEnum: (value) => {
    if (value) {
      return <Tag color = "green" > 开启 </Tag>
    }
    return <Tag color = "red" > 关闭 </Tag>
  },
  validStatusEnum: (value) => {
    if (value) {
      return <Tag color = "green" > 有效 </Tag>
    }
    return <Tag color = "red" > 无效 </Tag>
  },
  sysUrlTypeEnum: (value) => {
    return SysUrlTypeMap[value] || value || '';
  },
  color: (color, desc) => {
    return <Tag color = {
      color
    } > {
      desc
    } </Tag>
  },
  funcViewTypeEnum: (value) => {
    return funcViewTypeMap[value] || value || '';
  },
  funcDataTypeEnum: (value) => {
    return funcDataTypeMap[value] || value || '';
  },
  appsourceGroupEnum: (value) => {
    return appsourceGroupMap[value] || value || '';
  },
  reportTaskLogStatusEnum: (value) => {
    return reportTaskLogStatusMap[value] || value || '';
  },
  reportTaskLogTypeEnum: (value) => {
    return reportTaskLogTypeMap[value] || value || '';
  },
  reportTaskDataTypeEnum: (value) => {
    return reportTaskDataTypeMap[value] || value || '';
  },
  reportDataInputMethodEnum: (value) => {
    return reportDataInputMethodMap[value] || value || '';
  },
  reportDataStatusEnum: (value) => {
    return reportDataStatusMap[value] || value || '';
  },
  dataSourceTypeEnum: (value) => {
    return dataSourceTypeMap[value] || value || '';
  },
  operatorLogTypeEnum: (value) => {
    return operatorLogTypeMap[value] || value || '';
  },
  messageStatusEnum: (value) => {
    return messageStatusMap[value] || value || '';
  },
  messageNotifyTypeEnum: (value) => {
    return messageNotifyTypeMap[value] || value || '';
  },
  levelEnum: (value) => {
    return levelMap[value] || value || '';
  },
  roleClassEnum:(value) => {
    return roleClassMap[value] || value || '';
  },
  wxRoleAuthEnum:(value) => {
    return wxRoleAuthMap[value] || value || '';
  },
  enterpriseStatusEnum: (value) => {
    return enterpriseStatusMap[value] || value || '';
  },
}

export default TagMap;

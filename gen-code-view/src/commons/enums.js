import {
  BugOutlined,
  BarChartOutlined,
  WechatOutlined,
  AccountBookOutlined,
  OrderedListOutlined,
  AlertOutlined,
  ApiOutlined,
  EditOutlined,
  FormOutlined,
  AppstoreOutlined,
  BankOutlined,
  BellOutlined,
  BookOutlined,
  BuildOutlined,
  CalendarOutlined,
  CloudOutlined,
  CodeOutlined,
  ContactsOutlined,
  ContainerOutlined,
  ControlOutlined,
  CreditCardOutlined,
  CrownOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FlagOutlined,
  FireOutlined,
  GiftOutlined,
  HomeOutlined,
  HeartOutlined,
  MessageOutlined,
  ProfileOutlined,
  ProjectOutlined,
  PushpinOutlined,
  RestOutlined,
  RocketOutlined,
  StarOutlined,
  SettingOutlined,
  ToolOutlined,
  ApartmentOutlined,
  AuditOutlined,
  ClusterOutlined,
  DesktopOutlined,
  GlobalOutlined,
  GatewayOutlined,
  HistoryOutlined,
  ImportOutlined,
  UserOutlined,
  MonitorOutlined,
  FilterOutlined,
  LinkOutlined,
  SecurityScanOutlined,
  BlockOutlined,
  KeyOutlined,
  UnorderedListOutlined,
  FileExcelOutlined,
} from '@ant-design/icons';

export const EnumsMapp = {
  funcDataTypeEnum: [{
      value: 0,
      label: '普通值',
    },
    {
      value: 1,
      label: '枚举',
    },
    {
      value: 2,
      label: '关联表',
    },
    {
      value: 3,
      label: '字典表数据',
    }

  ],
  validStatusEnum: [{
      value: true,
      label: '有效',
    },
    {
      value: false,
      label: '无效',
    },
  ],
  startStatusEnum: [{
      value: true,
      label: '开启',
    },
    {
      value: false,
      label: '关闭',
    },
  ],
  yesnoStatusEnum: [{
      value: true,
      label: '是',
    },
    {
      value: false,
      label: '否',
    },
  ],
  funcViewTypeEnum: [{
      value: 'input',
      label: '普通文本框',
    },
    {
      value: 'number',
      label: '数字',
    },
    {
      value: 'checkbox',
      label: '复选框',
    },
    {
      value: 'switch',
      label: '开关',
    }, {
      value: 'datePicker',
      label: '日期时间输入框',
    },
    {
      value: 'timePicker',
      label: '时间输入框',
    }, {
      value: 'colorPicker',
      label: '颜色输入框',
    },
    {
      value: 'upload',
      label: '文件上传',
    },
    {
      value: 'rate',
      label: '推荐级别',
    },
    {
      value: 'slider',
      label: '滑块',
    },
    {
      value: 'hidden',
      label: '隐藏域',
    },
    {
        value: 'TextArea ',
        label: '大文本框',
      },
  ],
  sysUrlTypeEnum: [
    {
      value: 1,
      label: '页面',
    },
    {
      value: 2,
      label: '接口',
    },
    {
      value: 3,
      label: '功能',
    },
  ],
  messageChannel:[
    {
      value: 'mgsDefault',
      label: '短信(默认)',
    },
    {
      value: 'mgsWxTemplate',
      label: '微信订阅号',
    },
    {
      value: 'MailSendChannel',
      label: '邮箱',
    },
  ],
  roleClassEnum:[
    {
      value: 1,
      label: "项目",
    },
    {
      value: 2,
      label: "任务",
    },
  ],
  appsourceGroup:[
    {
      value: 'view',
      label: '前端',
    },
    {
      value: 'server',
      label: '后台',
    }
  ],
  getLabelByValue: (value, data = []) => {
    if (value === undefined || value === null) {
      return ''
    }
    for (const i in data) {
      const e = this[i]
      if (e && e.value === value) {
        return e.label
      }
    }
    return ''
  }
}

export const  IconMap ={
  'ordered-list': <OrderedListOutlined />,
   bug: <BugOutlined />,
   'bar-chart': <BarChartOutlined />,
   wechat: <WechatOutlined />,
   'account-book': <AccountBookOutlined />,
   area: <AlertOutlined />,
   api: <ApiOutlined />,
   edit: <EditOutlined />,
   form: <FormOutlined />,
   appstore: <AppstoreOutlined />,
   bank: <BankOutlined />,
   bell: <BellOutlined />,
   book: <BookOutlined />,
   build: <BuildOutlined />,
   calendar: <CalendarOutlined />,
   cloud: <CloudOutlined />,
   code: <CodeOutlined />,
   contacts: <ContactsOutlined />,
   container: <ContainerOutlined />,
   control: <ControlOutlined />,
   'credit-card': <CreditCardOutlined />,
   crown: <CrownOutlined />,
   dashboard: <DashboardOutlined />,
   database: <DatabaseOutlined />,
   flag: <FlagOutlined />,
   fire: <FireOutlined />,
   gift: <GiftOutlined />,
   home: <HomeOutlined />,
   heart: <HeartOutlined />,
   message: <MessageOutlined />,
   profile: <ProfileOutlined />,
   project: <ProjectOutlined />,
   pushpin: <PushpinOutlined />,
   rest: <RestOutlined />,
   rocket: <RocketOutlined />,
   star: <StarOutlined />,
   setting: <SettingOutlined />,
   tool: <ToolOutlined />,
   apartment: <ApartmentOutlined />,
   audit: <AuditOutlined />,
   cluster: <ClusterOutlined />,
   desktop: <DesktopOutlined />,
   global: <GlobalOutlined />,
   gateway: <GatewayOutlined />,
   history: <HistoryOutlined />,
   import: <ImportOutlined />,
   user: <UserOutlined />,
   monitor: <MonitorOutlined />,
   filter: <FilterOutlined />,
   link: <LinkOutlined />,
   'security-scan': <SecurityScanOutlined />,
   block: <BlockOutlined />,
   key: <KeyOutlined />,
   list: <UnorderedListOutlined />,
   excel: <FileExcelOutlined />,
}
export const fieldTypeEnums = {
    1: '普通字符串',
    2: '日期格式',
    3: '小数',
    4: '百分数',
    5: '美元',
    6: '人民币'
}
export const fieldDataTypeEnums = {
    1: '普通字符串',
}

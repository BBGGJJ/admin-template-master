import { Request, Response } from 'express';

export default {
  // 支持值为 Object 和 Array
  'POST /api/tableList': (req: Request, res: Response) => {
    res.send({
      "code": 0,
      "msg": null,
      "data": [{
        "packagePath": null,
        "name": "RccApiToken",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_api_token",
        "desc": "api",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "token",
            "desc": "api",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "token",
            "cnName": "api",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_id",
            "desc": "工程ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectId",
            "cnName": "工程ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_name",
            "desc": "工程名称",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectName",
            "cnName": "工程名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "expire_never",
            "desc": "是否过期，1-永不过期，0-非永不过期",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "expireNever",
            "cnName": "是否过期，1-永不过期，0-非永不过期",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "expire_time",
            "desc": "过期时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "expireTime",
            "cnName": "过期时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "deleted",
            "desc": "删除标志，1-已删除",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "deleted",
            "cnName": "删除标志，1-已删除",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccConfigChangeLog",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_config_change_log",
        "desc": "配置变更记录",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "user_id",
            "desc": "操作人ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "userId",
            "cnName": "操作人ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "operator",
            "desc": "操作人名称",
            "type": "VARCHAR",
            "lenth": 60,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "operator",
            "cnName": "操作人名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "所属产品线ID",
            "type": "INTEGER",
            "lenth": 10,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "所属产品线ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_id",
            "desc": "工程ID",
            "type": "INTEGER",
            "lenth": 10,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectId",
            "cnName": "工程ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "environment_id",
            "desc": "环境id",
            "type": "INTEGER",
            "lenth": 10,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "environmentId",
            "cnName": "环境id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "version_id",
            "desc": "版本id",
            "type": "INTEGER",
            "lenth": 10,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "versionId",
            "cnName": "版本id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "group_id",
            "desc": "分组id",
            "type": "INTEGER",
            "lenth": 10,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "groupId",
            "cnName": "分组id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "group_name",
            "desc": "分组名称",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "groupName",
            "cnName": "分组名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "old_content",
            "desc": "原配置",
            "type": "TEXT",
            "lenth": 21845,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "oldContent",
            "cnName": "原配置",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "new_content",
            "desc": "新配置",
            "type": "TEXT",
            "lenth": 21845,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "newContent",
            "cnName": "新配置",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccConfigGroup",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_config_group",
        "desc": "分组",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "name",
            "desc": "分组名称",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "name",
            "cnName": "分组名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "所属产品线ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "所属产品线ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "memo",
            "desc": "分组描述",
            "type": "VARCHAR",
            "lenth": 200,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "memo",
            "cnName": "分组描述",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_id",
            "desc": "工程ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectId",
            "cnName": "工程ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "environment_id",
            "desc": "环境id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "environmentId",
            "cnName": "环境id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "version_id",
            "desc": "版本id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "versionId",
            "cnName": "版本id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "default_type",
            "desc": "默认分组标识",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "defaultType",
            "cnName": "默认分组标识",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "deleted",
            "desc": "删除标志，1-已删除",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "deleted",
            "cnName": "删除标志，1-已删除",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccConfigItem",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_config_item",
        "desc": "配置项",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "name",
            "desc": "配置项名称",
            "type": "VARCHAR",
            "lenth": 128,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "name",
            "cnName": "配置项名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "所属产品线ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "所属产品线ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "memo",
            "desc": "配置项描述",
            "type": "VARCHAR",
            "lenth": 200,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "memo",
            "cnName": "配置项描述",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_id",
            "desc": "工程ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectId",
            "cnName": "工程ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "environment_id",
            "desc": "环境id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "environmentId",
            "cnName": "环境id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "version_id",
            "desc": "版本id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "versionId",
            "cnName": "版本id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "group_id",
            "desc": "组id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "groupId",
            "cnName": "组id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "type_id",
            "desc": "配置类型id",
            "type": "INTEGER",
            "lenth": 10,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "typeId",
            "cnName": "配置类型id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "val",
            "desc": "配置值",
            "type": "VARCHAR",
            "lenth": 4096,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "val",
            "cnName": "配置值",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "shareable",
            "desc": "是否共享",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "shareable",
            "cnName": "是否共享",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "ref",
            "desc": "是否引用值",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "ref",
            "cnName": "是否引用值",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "deleted",
            "desc": "删除标志，1-已删除",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "deleted",
            "cnName": "删除标志，1-已删除",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccEnvironment",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_environment",
        "desc": "环境",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "name",
            "desc": "环境名称",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "name",
            "cnName": "环境名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "所属产品线ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "所属产品线ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "memo",
            "desc": "环境描述",
            "type": "VARCHAR",
            "lenth": 200,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "memo",
            "cnName": "环境描述",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_id",
            "desc": "工程ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectId",
            "cnName": "工程ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "deleted",
            "desc": "删除标志，1-已删除",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "deleted",
            "cnName": "删除标志，1-已删除",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccEnvironmentUser",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_environment_user",
        "desc": "环境用户关系",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "自增主键",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "自增主键",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "自增主键",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "自增主键",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "所属产品线ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "所属产品线ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_id",
            "desc": "工程id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectId",
            "cnName": "工程id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "environment_id",
            "desc": "环境id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "environmentId",
            "cnName": "环境id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "user_id",
            "desc": "用户id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "userId",
            "cnName": "用户id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "user_name",
            "desc": "用户名",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "userName",
            "cnName": "用户名",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "pri_type",
            "desc": "权限，1-读，2-写",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "priType",
            "cnName": "权限，1-读，2-写",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccGrayInfo",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_gray_info",
        "desc": "灰度规则内容",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "rule_name",
            "desc": "灰度名称",
            "type": "VARCHAR",
            "lenth": 120,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "ruleName",
            "cnName": "灰度名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "rule_content",
            "desc": "灰度规则内容",
            "type": "VARCHAR",
            "lenth": 200,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "ruleContent",
            "cnName": "灰度规则内容",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "rule_bean",
            "desc": "规则sring",
            "type": "VARCHAR",
            "lenth": 40,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "ruleBean",
            "cnName": "规则sring",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccGrayRule",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_gray_rule",
        "desc": "灰度规则信息",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "gray_version_id",
            "desc": "灰度版本id",
            "type": "BIGINT",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "grayVersionId",
            "cnName": "灰度版本id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "rule_id",
            "desc": "灰度规则ID",
            "type": "BIGINT",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "ruleId",
            "cnName": "灰度规则ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "rule_content",
            "desc": "灰度规则内容",
            "type": "VARCHAR",
            "lenth": 120,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "ruleContent",
            "cnName": "灰度规则内容",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "deleted",
            "desc": "0-未删除，1-删除",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "deleted",
            "cnName": "0-未删除，1-删除",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccInstance",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_instance",
        "desc": "实例信息",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "idc",
            "desc": "机房名称",
            "type": "VARCHAR",
            "lenth": 120,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "idc",
            "cnName": "机房名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "container_id",
            "desc": "容器ID",
            "type": "VARCHAR",
            "lenth": 120,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "containerId",
            "cnName": "容器ID",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "app_name",
            "desc": "应用名",
            "type": "VARCHAR",
            "lenth": 120,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "appName",
            "cnName": "应用名",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "ip",
            "desc": "ip地址",
            "type": "VARCHAR",
            "lenth": 16,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "ip",
            "cnName": "ip地址",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "client_version",
            "desc": "客户端版本",
            "type": "VARCHAR",
            "lenth": 32,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "clientVersion",
            "cnName": "客户端版本",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "enable_update_callback",
            "desc": "是否开启心跳功能",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "enableUpdateCallback",
            "cnName": "是否开启心跳功能",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "last_checksum",
            "desc": "上一次checksum值",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "lastChecksum",
            "cnName": "上一次checksum值",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "last_checksum_time",
            "desc": "上次生效时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "lastChecksumTime",
            "cnName": "上次生效时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "current_checksum",
            "desc": "当前checksum值",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "currentChecksum",
            "cnName": "当前checksum值",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "current_checksum_time",
            "desc": "当前生效时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "currentChecksumTime",
            "cnName": "当前生效时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "version_id",
            "desc": "版本id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "versionId",
            "cnName": "版本id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "net_cost",
            "desc": "上一次网络开销",
            "type": "INTEGER",
            "lenth": 10,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "netCost",
            "cnName": "上一次网络开销",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "heartbeat_time",
            "desc": "最后心跳时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "heartbeatTime",
            "cnName": "最后心跳时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "gray_flag",
            "desc": "灰度标识",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "grayFlag",
            "cnName": "灰度标识",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "gray_version_id",
            "desc": "灰度版本ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "grayVersionId",
            "cnName": "灰度版本ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccItemType",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_item_type",
        "desc": "配置项类型",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "name",
            "desc": "类型名称",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "name",
            "cnName": "类型名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "memo",
            "desc": "备注",
            "type": "VARCHAR",
            "lenth": 200,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "memo",
            "cnName": "备注",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "is_encrypt",
            "desc": "是否加密0:不加密1:加密",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "isEncrypt",
            "cnName": "是否加密0:不加密1:加密",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccOperationConfig",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_operation_config",
        "desc": "运营配置",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "config_key",
            "desc": "Y",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "configKey",
            "cnName": "Y",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "config_val",
            "desc": "运营配置Value",
            "type": "VARCHAR",
            "lenth": 2000,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "configVal",
            "cnName": "运营配置Value",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccOperationLog",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_operation_log",
        "desc": "操作日志表",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "自增ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "自增ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "自增ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "自增ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "user_id",
            "desc": "操作人ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "userId",
            "cnName": "操作人ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "operator",
            "desc": "操作人名称",
            "type": "VARCHAR",
            "lenth": 60,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "operator",
            "cnName": "操作人名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "scene",
            "desc": "场景",
            "type": "VARCHAR",
            "lenth": 128,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "scene",
            "cnName": "场景",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "request",
            "desc": "请求参数",
            "type": "TEXT",
            "lenth": 21845,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "request",
            "cnName": "请求参数",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "response",
            "desc": "返回参数",
            "type": "VARCHAR",
            "lenth": 10240,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "response",
            "cnName": "返回参数",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "remote_address",
            "desc": "操作地址",
            "type": "VARCHAR",
            "lenth": 60,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "remoteAddress",
            "cnName": "操作地址",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccProduct",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_product",
        "desc": "产品线",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "name",
            "desc": "产品线名称",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "name",
            "cnName": "产品线名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "memo",
            "desc": "产品线描述",
            "type": "VARCHAR",
            "lenth": 200,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "memo",
            "cnName": "产品线描述",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccProductUser",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_product_user",
        "desc": "产品线用户关系",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "产品线id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "产品线id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "user_id",
            "desc": "用户ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "userId",
            "cnName": "用户ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "user_name",
            "desc": "用户名",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "userName",
            "cnName": "用户名",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "is_admin",
            "desc": "角色，0：非管理员，1管理员",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "isAdmin",
            "cnName": "角色，0：非管理员，1管理员",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccProject",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_project",
        "desc": "工程信息表",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "name",
            "desc": "工程名称",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "name",
            "cnName": "工程名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "所属产品线ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "所属产品线ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "memo",
            "desc": "工程描述",
            "type": "VARCHAR",
            "lenth": 200,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "memo",
            "cnName": "工程描述",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_type",
            "desc": "工程类型0:公共",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectType",
            "cnName": "工程类型0:公共",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "dependency_ids",
            "desc": "依赖工程id列表",
            "type": "VARCHAR",
            "lenth": 500,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "dependencyIds",
            "cnName": "依赖工程id列表",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "dependency_names",
            "desc": "依赖工程名",
            "type": "VARCHAR",
            "lenth": 1024,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "dependencyNames",
            "cnName": "依赖工程名",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "mail_receiver",
            "desc": "变更邮件接收人",
            "type": "VARCHAR",
            "lenth": 500,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "mailReceiver",
            "cnName": "变更邮件接收人",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "api_password",
            "desc": "api访问密码",
            "type": "VARCHAR",
            "lenth": 218,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "apiPassword",
            "cnName": "api访问密码",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "api_token",
            "desc": "api",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "apiToken",
            "cnName": "api",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "deleted",
            "desc": "删除标志，1-已删除",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "deleted",
            "cnName": "删除标志，1-已删除",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccProjectUser",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_project_user",
        "desc": "工程用户关系",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "所属产品线ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "所属产品线ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_id",
            "desc": "工程id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectId",
            "cnName": "工程id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "user_id",
            "desc": "用户id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "userId",
            "cnName": "用户id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "user_name",
            "desc": "用户名",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "userName",
            "cnName": "用户名",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "is_admin",
            "desc": "是否管理员",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "isAdmin",
            "cnName": "是否管理员",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccUser",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_user",
        "desc": "用户",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "name",
            "desc": "用户名",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "name",
            "cnName": "用户名",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "password",
            "desc": "操作台登录密码",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "password",
            "cnName": "操作台登录密码",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "api_password",
            "desc": "api访问密码",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "apiPassword",
            "cnName": "api访问密码",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "status",
            "desc": "状态0-正常，1-禁用",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "status",
            "cnName": "状态0-正常，1-禁用",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "type",
            "desc": "用户类型",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "type",
            "cnName": "用户类型",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "role",
            "desc": "管理类型",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "role",
            "cnName": "管理类型",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "token",
            "desc": "token",
            "type": "VARCHAR",
            "lenth": 64,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "token",
            "cnName": "token",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }, {
        "packagePath": null,
        "name": "RccVersion",
        "businessModule": "brcc",
        "businessModuleDesc": "首页",
        "tableName": "rcc_version",
        "desc": "版本",
        "disableEdit": false,
        "primaryKey": {
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        },
        "columnList": [{
          "tableColumn": {
            "columnName": "id",
            "desc": "编号",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": true,
            "autoIncrement": true
          },
          "beanAttr": {
            "name": "id",
            "cnName": "编号",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": true,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "name",
            "desc": "版本名称",
            "type": "VARCHAR",
            "lenth": 50,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "name",
            "cnName": "版本名称",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "product_id",
            "desc": "所属产品线ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "productId",
            "cnName": "所属产品线ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "memo",
            "desc": "版本描述",
            "type": "VARCHAR",
            "lenth": 200,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "memo",
            "cnName": "版本描述",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "project_id",
            "desc": "工程ID",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "projectId",
            "cnName": "工程ID",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "environment_id",
            "desc": "环境id",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "environmentId",
            "cnName": "环境id",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "check_sum",
            "desc": "更新标识，由该标识识别是否有配置更新",
            "type": "VARCHAR",
            "lenth": 36,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "checkSum",
            "cnName": "更新标识，由该标识识别是否有配置更新",
            "typeClassName": "String",
            "javaType": "java.lang.String"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "check_sum_date",
            "desc": "check_sum最后提交时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "checkSumDate",
            "cnName": "check_sum最后提交时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "check_sum_enable",
            "desc": "是否运行check检查。1-检查",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "checkSumEnable",
            "cnName": "是否运行check检查。1-检查",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "deleted",
            "desc": "删除标志，1-已删除",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "deleted",
            "cnName": "删除标志，1-已删除",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "update_time",
            "desc": "更新时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "updateTime",
            "cnName": "更新时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "create_time",
            "desc": "创建时间",
            "type": "DATE",
            "lenth": 19,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "createTime",
            "cnName": "创建时间",
            "typeClassName": "Date",
            "javaType": "java.util.Date"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "gray_flag",
            "desc": "灰度标识",
            "type": "TINYINT",
            "lenth": 3,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "grayFlag",
            "cnName": "灰度标识",
            "typeClassName": "Integer",
            "javaType": "java.lang.Integer"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }, {
          "tableColumn": {
            "columnName": "main_version_id",
            "desc": "关联的主版本",
            "type": "BIGINT",
            "lenth": 20,
            "primarKey": false,
            "autoIncrement": false
          },
          "beanAttr": {
            "name": "mainVersionId",
            "cnName": "关联的主版本",
            "typeClassName": "Long",
            "javaType": "java.lang.Long"
          },
          "viewAttr": {
            "disabled": false,
            "defultValue": null,
            "inputType": null,
            "inputMethod": null,
            "inputEnumData": null,
            "pattern": null,
            "switchType": null,
            "selectUrl": null,
            "required": false,
            "allowEdit": true,
            "listView": true,
            "detailView": true
          }
        }]
      }]
    });
  },
  'GET /api/template': (req: Request, res: Response) => {
    res.send(
      {
      	"code": 0,
      	"msg": null,
      	"data": [{
      		"title": "vue-2.0-前端模版",
      		"key": "vue"
      	}, {
      		"title": "vue-antd-2.0-前端模版",
      		"key": "vue-antd"
      	}, {
      		"title": "vue-elementui-2.0-前端模版",
      		"key": "vue-elementui"
      	}, {
      		"title": "react-template前端项目",
      		"key": "react-template"
      	}, {
      		"title": "react-umi3-ts前端项目",
      		"key": "react-umi3-ts"
      	}, {
      		"title": "java-spring-boot后端项目",
      		"key": "spring-boot"
      	}]
      }
    );
  }
};

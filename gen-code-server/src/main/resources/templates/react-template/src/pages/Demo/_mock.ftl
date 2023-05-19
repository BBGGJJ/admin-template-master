!#parse
!#name /src/pages/${classInfo.businessModule?cap_first}/${classInfo.name}/_mock.js
!#list

import { parse } from 'url';
// mock tableListDataSource
let tableListDataSource = [];

for (let i = 0; i < 10; i += 1) {
  tableListDataSource.push({
   <#list classInfo.columnList as fieldItem >
   ${fieldItem.beanAttr.name}: `${fieldItem.beanAttr.name} ${r"${i}"}`,
  </#list>
  });
}

function getRule(req, res, u) {
  let url = u;

  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    // eslint-disable-next-line prefer-destructuring
    url = req.url;
  }

  const params = parse(url, true).query;
  let dataSource = tableListDataSource;

  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }

      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource = [];
    status.forEach(s => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter(item => {
          if (parseInt(`${r"${item.status}"}`, 10) === parseInt(s.split('')[0], 10)) {
            return true;
          }

          return false;
        }),
      );
    });
    dataSource = filterDataSource;
  }

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.includes(params.name || ''));
  }

  let pageSize = 10;

  if (params.pageSize) {
    pageSize = parseInt(`${r"${params.pageSize}"}`, 0);
  }

  const result = {
    data: dataSource,
    total: dataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${r"${params.currentPage}"}`, 10) || 1,
  };
  return res.json(result);
}

function postRule(req, res, u, b) {
  let url = u;

  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    // eslint-disable-next-line prefer-destructuring
    url = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, ${classInfo.primaryKey.beanAttr.name} } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter(item => ${classInfo.primaryKey.beanAttr.name}.indexOf(item.${classInfo.primaryKey.beanAttr.name}) === -1);
      break;

    case 'post':
      const i = Math.ceil(Math.random() * 10000);
      tableListDataSource.unshift({
	   <#list classInfo.columnList as fieldItem >
	   ${fieldItem.beanAttr.name}: `${fieldItem.beanAttr.name} ${r"${i}"}`,
	  </#list>
      });
      break;

    case 'update':
      tableListDataSource = tableListDataSource.map(item => {
        if (item.${classInfo.primaryKey.beanAttr.name} === ${classInfo.primaryKey.beanAttr.name}) {
          return { ...item, desc, name };
        }

        return item;
      });
      break;

    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };
  return res.json(result);
}

export default {
  'GET /api/${classInfo.businessModule}/${classInfo.name?uncap_first}/pageList.do': getRule,
  'POST /api/${classInfo.businessModule}/${classInfo.name?uncap_first}/delete.do': postRule,
  'POST /api/${classInfo.businessModule}/${classInfo.name?uncap_first}/save.do': postRule,
  'POST /api/${classInfo.businessModule}/${classInfo.name?uncap_first}/update.do': postRule,

};

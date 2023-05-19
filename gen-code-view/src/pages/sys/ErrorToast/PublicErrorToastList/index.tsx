import React, { useState, useCallback, useRef } from 'react';
import { Tabs } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useModel } from 'umi';
import ErrorToast from '../components/ErrorToastList';

const { TabPane } = Tabs;


export default () => {
  const { initialState } = useModel('@@initialState');
  const { appsources } = initialState || {};
  console.log(appsources)
  const reader=()=>{
    return appsources.map(e =>{
        return (
          <TabPane tab={e.name} key={e.appCode}>
            <ErrorToast bizCode={e.appCode} />
          </TabPane>
        )
      }
    )
  }
  return (
    <PageHeaderWrapper>
      <ErrorToast bizCode="public" />
    </PageHeaderWrapper>
  );
};

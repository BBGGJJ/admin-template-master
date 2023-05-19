import React, { useState, useCallback, useRef } from 'react';
import { Tabs } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useModel } from 'umi';
import ErrorToast from '../components/ErrorToastList';
import styles from './index.less';
const { TabPane } = Tabs;


export default () => {
  const { initialState } = useModel('@@initialState');
  const { appsources } = initialState || {};
  const reader = () => {
    return appsources.map(e => {
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
        <div className={styles.tabsLeft}>
        <Tabs type="card" tabPosition="left">
          {reader()}
        </Tabs>
        </div>
    </PageHeaderWrapper>
        );
      };

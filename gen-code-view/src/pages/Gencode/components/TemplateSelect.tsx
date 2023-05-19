import React, { useState, useRef, useEffect } from 'react';
import { Modal, Transfer } from 'antd';
import setting from '@/config/setting';


const UpdateForm: React.FC = (props) => {
  const templateData = props.templateData || [];
  console.log(templateData)
  const [targetKeys, setTargetKeys] = useState<Array>(props.defaultValue || []);
  const handleChange = (targetKeys, direction, moveKeys) => {
    setTargetKeys(targetKeys);
    console.log(targetKeys);
    props.onChange(targetKeys);
  }
  return (
    <div>
      <Transfer
        dataSource={templateData}
        listStyle={{
          width: 300,
          height: 300,
        }}
        targetKeys={targetKeys}
        onChange={handleChange}
        render={item => item.title}
      />
    </div>
  );
};

export default UpdateForm;

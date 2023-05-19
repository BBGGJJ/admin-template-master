import React from 'react';
import request from '@/utils/request';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";

class CodeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      value: props.value || '',
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }
  componentWillReveiceProps(nextProps){
    console.log(nextProps.value)
    this.setState({value: nextProps.value});
  }
  setValue = (value) => {
    this.setState({
      value
    });
  }
  render() {
    const {
      value
    } = this.state;
    return (
      <AceEditor
        ref={this.myRef}
        mode="mysql"
        theme="xcode"
         {...this.props}
        onChange={(value) =>{
          this.setState({value});
          this.props.onChange(value);
        }}
        value={this.state.value}
        defaultValue={this.state.value}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

export default CodeEdit;

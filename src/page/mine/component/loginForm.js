import React from 'react';
import {Form, Icon, Input, Button,message} from 'antd';
import axios from'axios';
  
  class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          axios
          .post(`${axios.axiosurl}/login`, values)
          .then(res => {
            // console.log(res);
            if(res.data.code===1){
              let {history}=this.props;
              // console.log(history);
              let storage={'token':res.data.token,'tel':res.data.data}
              storage=JSON.stringify(storage);
              localStorage.setItem('tokenData', storage);
              
              history.push('/mine');
            }else{
              message.info('账号或密码错误');
            }
          });
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('tel', {
              rules: [{ required: true, message: '请输入手机号码'},{pattern:/^1[3-9]\d{9}$/,message:'手机号码不符合规则'}],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号码" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码以字母开头，不少于6位'},{pattern:/^[a-zA-Z]\w{5,18}$/,message: '密码以字母开头，不少于6位'}],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
            )}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a> */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录/注册
            </Button>
            <span>新用户点击登录默认注册</span>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
  export default WrappedNormalLoginForm;
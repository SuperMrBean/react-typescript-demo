import React, { Component } from 'react';
import { Form, Icon, Input, Button,message } from 'antd';
import { FormComponentProps } from "antd/lib/form/Form";
import {register} from '../../api'
interface propsModel extends FormComponentProps<any> {
  switchBox: Function
}
class RegisterForm extends Component<propsModel> {
  handleRegister=(e:any)=>{
    e.preventDefault()
    this.props.form.validateFields((err,values)=>{
      if(!err){
        const params = {
          name:values.setUserName,
          phone:values.setPhone,
          password:values.setPassword,
          email:values.setEmail,
          type:1
        }
        register(params).then(()=>{
          message.success('注册成功！')
        })
      }
    })
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <Form onSubmit={this.handleRegister} className="login-form">
        <Form.Item>
          {getFieldDecorator('setUserName', {
            initialValue:'',
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(255,255,255,.8)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('setPhone', {
            initialValue:'',
            rules: [{ required: true, message: '请输入手机号码' }],
          })(
            <Input
              prefix={<Icon type="phone" style={{ color: 'rgba(255,255,255,.8)' }} />}
              placeholder="手机号码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('setEmail', {
            initialValue:'',
            rules: [{ required: true, message: '请输入邮箱' }],
          })(
            <Input
              prefix={<Icon type="fund" style={{ color: 'rgba(255,255,255,.8)' }} />}
              placeholder="邮箱"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('setPassword', {
            initialValue:'',
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(255,255,255,.8)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" shape="round" className="btn">
            注册	
          </Button>
        </Form.Item>
        <Form.Item style={{textAlign:'center'}}>
          <Button type='link' onClick={this.props.switchBox.bind(this,'login')}>
            返回登录	
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
const wrappedRegisterForm = Form.create<propsModel>()(RegisterForm);
export default wrappedRegisterForm;

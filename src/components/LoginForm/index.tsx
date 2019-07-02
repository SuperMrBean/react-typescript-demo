import React, { Component } from 'react';
import { Form, Icon, Input, Button,message } from 'antd';
import { FormComponentProps } from "antd/lib/form/Form";
import {login,logout} from '../../api'
interface propsModel extends FormComponentProps {
  switchBox: Function
  history:any
}
class LoginForm extends Component<propsModel> {
  componentWillMount(){
    // console.log(this.props.history)
  }
  handleLogin=(e:any)=>{
    e.preventDefault()
    this.props.form.validateFields((err,values)=>{
      if(!err){
        const params = {
          phone:values.phone,
          password:values.password
        }
        login(params).then(()=>{
          message.success('登录成功！')
          this.props.history.push('/')
        })
      }
    })
  }
  handleLogout=()=>{
    logout().then(()=>{
      message.success('退出成功！')
    })
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleLogin} className="login-form">
          <Form.Item>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输手机号码' }],
            })(
              <Input
                prefix={<Icon type="phone" style={{ color: 'rgba(255,255,255,.8)' }} />}
                placeholder="手机号码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
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
              登录	
            </Button>
          </Form.Item>
          <Form.Item style={{textAlign:'center'}}>
            <Button type='link' onClick={this.props.switchBox.bind(this,'register')}>
              前往注册	
            </Button>
            <Button type='link' onClick={this.handleLogout}>
              登出	
            </Button>
          </Form.Item>
        </Form>
      </div>

    )
  }
}
const wrappedLoginForm = Form.create<propsModel>()(LoginForm);
export default wrappedLoginForm;

import React, { Component } from 'react';
import Particle from '../../components/Particles';
import classnames from 'classnames';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import {RouteComponentProps,withRouter} from 'react-router-dom';
import './index.less';
interface statesModel  {
	tap:string
}
class Login extends Component<RouteComponentProps> {
	state:statesModel = {
		tap:'login'
	}
	switchBox = (type:string) =>{
		this.setState({
			tap:type
		})
	}
	componentWillMount(){
		// console.log(this.props.history)
	}
	render() {
		let loginClass = classnames({
			box:true,
			showBox:this.state.tap === 'login',
			hiddenBox:this.state.tap !== 'login',
			login:this.state.tap === 'login'
		})
		let registerClass = classnames({
			box:true,
			showBox:this.state.tap === 'register',
			hiddenBox:this.state.tap !== 'register',
			register:this.state.tap === 'register'
		})
		return (
			<div id="login">
				<Particle/>
				<div className={loginClass}>
					<span className="title">登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
					<LoginForm switchBox={this.switchBox} history={this.props.history}></LoginForm>
				</div>
				<div className={registerClass}>
					<span className="title">注&nbsp;&nbsp;&nbsp;&nbsp;册</span>
					<RegisterForm switchBox={this.switchBox}></RegisterForm>
				</div>
			</div>

		);
	}
}
export default withRouter<RouteComponentProps>(Login)
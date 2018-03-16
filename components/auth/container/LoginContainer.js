import React from 'react'
import LoginForm from '../presentation/LoginForm'
import { Form } from 'antd'

class LoginContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loginState: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  responseGoogle(event){
    console.log(event)
  }
  responseFacebook(event){
    console.log(event)
  }
  handleOnClick(event){
    this.setState({loginState:true})
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }else{
        setTimeout(() => {
          this.setState({loginState:false})
        }, 800)
      }
    });
    event.preventDefault()
  }
  render(){
    return(
      <LoginForm
        form={this.props.form}
        onSubmit={this.handleSubmit}
        onClick={this.handleOnClick}
        loginState={this.state.loginState}
        responseGoogle={this.responseGoogle}
        responseGoogle={this.responseFacebook}/>
    )
  }
}

export default Form.create()(LoginContainer)

import React from 'react'
import LoginForm from '../presentation/LoginForm'
import { Form } from 'antd'

class LoginContainer extends React.Component{
  constructor(props){
    super(props)
  }
  responseGoogle(event){
    console.log(event)
  }
  responseFacebook(event){
    console.log(event)
  }
  handleSubmit(event){
    console.log(event)
  }
  render(){
    return(
      <LoginForm form={this.props.form} onSubmit={this.handleSubmit} responseGoogle={this.responseGoogle} responseGoogle={this.responseFacebook}/>
    )
  }
}

export default Form.create()(LoginContainer)

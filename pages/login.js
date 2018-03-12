import React from 'react'
import Layout from '../components/layout/Layout'
import LoginForm from '../components/auth/LoginForm'

class Login extends React.Component{
  responseGoogle(event){
    console.log(event)
  }
  render(){
    console.log(this.props)
    return(
      <Layout>
        <LoginForm responseGoogle={this.responseGoogle}/>
      </Layout>
    )
  }
}

export default Login

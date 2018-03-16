import React from 'react'
import Layout from '../components/layout/Layout'
import Login from '../components/auth/container/LoginContainer'

class LoginPage extends React.Component{
  render(){
    return(
      <Layout path={this.props.url.pathname}>
        <Login/>
      </Layout>
    )
  }
}

export default LoginPage

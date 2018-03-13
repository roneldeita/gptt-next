import React from 'react'
import Layout from '../components/layout/Layout'
import Carousel from '../components/home/Carousel'

import css from '../static/css/index.css'

class Index extends React.Component {
  static async getInitialProps({req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
  render(){
    console.log(process.env.API_HOST)
    return(
      <Layout>
        <Carousel />
        {this.props.userAgent}
        {this.props.source}
      </Layout>
    )
  }
}
export default Index

import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/home/Carousel'

class Index extends React.Component {
  static async getInitialProps({req}) {
    console.log(req)
    const stateSample = 'foo'
    return { stateSample }
  }
  render(){
    return(
      <Layout>
        <Carousel />
        {this.props.stateSample}
      </Layout>
    )
  }
}
export default Index

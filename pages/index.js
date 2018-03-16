import React from 'react'
import Store from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/layout/Layout'
import Carousel from '../components/home/container/CarouselContainer'

class Index extends React.Component{
  render(){
    return(
      <Layout path={this.props.url.pathname}>
        <Carousel/>
      </Layout>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    locale: state.locale,
  }
}

export default withRedux(Store, mapStateToProps, null)(Index)

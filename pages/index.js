import React from 'react'
import Store from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/layout/Layout'
import Carousel from '../components/home/container/CarouselContainer'
import Cities from '../components/home/container/CitiesContainer'
import BottomBar from '../components/home/container/BottomBarContainer'
import Guide from '../components/home/container/GuideContainer'
import Destination from '../components/home/container/DestinationContainer'
import Deals from '../components/home/container/DealsContainer'

class Index extends React.Component{
  render(){
    return(
      <Layout path={this.props.url.pathname}>
        <Carousel/>
        <Destination/>
        <Deals/>
        <Cities/>
        <Guide/>
        <BottomBar/>
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

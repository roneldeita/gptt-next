import React from 'react'
import Carousel from '../presentation/Carousel'

class CarouselContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      carousel:[
        { img:'../static/images/banner/el-nido.jpg', slogan:'If not now, when?' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Just Go!' },
        { img:'../static/images/banner/Asia-Travel-Group.jpg', slogan:'We all deserve a little wanderlust.' }
      ]
    }
  }
  render(){
    return(
      <Carousel carousel={this.state.carousel}/>
    )
  }
}
export default CarouselContainer

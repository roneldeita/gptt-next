import React from 'react'
import Cities from '../presentation/Cities'

class CitiesContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      images:[
        { img:'../static/images/banner/el-nido.jpg', slogan:'Cebu' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Bohol' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Alabang' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Makati' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Quezon' },
        { img:'../static/images/banner/Asia-Travel-Group.jpg', slogan:'Ayala' },
        { img:'../static/images/banner/el-nido.jpg', slogan:'Makati' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Baguio' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Iloilo' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Bacolod' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Davao' },
        { img:'../static/images/banner/Asia-Travel-Group.jpg', slogan:'Ilocos' },
        { img:'../static/images/banner/el-nido.jpg', slogan:'Manila' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Tarlac' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Clark' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Paranaque' },
        { img:'../static/images/banner/coastal.jpg', slogan:'Manila' },
        { img:'../static/images/banner/Asia-Travel-Group.jpg', slogan:'Cebu' }
      ]
    }
  }
  render(){
    return(
      <Cities images={this.state.images}/>
    )
  }
}
export default CitiesContainer
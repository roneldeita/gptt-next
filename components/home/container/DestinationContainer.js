import React from 'react'
import Destination from '../presentation/Destination'

class DestinationContainer extends React.Component {
  constructor(props){
    super(props)
     this.state = {
      loader: true,
      images:[
        { img:'../static/images/banner/el-nido.jpg', slogan:'Cebu',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { img:'../static/images/banner/coastal.jpg', slogan:'Davao',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { img:'../static/images/banner/coastal.jpg', slogan:'Coron',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { img:'../static/images/banner/coastal.jpg', slogan:'Bohol',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { img:'../static/images/banner/coastal.jpg', slogan:'Palawan',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
        { img:'../static/images/banner/coastal.jpg', slogan:'Dumaguete',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
      ]
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({loader:false})
    }, 800)
  }
  render(){
    return(
      <Destination data={this.state}/>
    )
  }
}
export default DestinationContainer
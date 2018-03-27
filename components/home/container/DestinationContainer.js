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
      ],
      width:  0
    }
  }
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }
  componentDidMount(){

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));

    setTimeout(()=>{
      this.setState({loader:false})
    }, 800)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render(){
    return(
      <Destination data={this.state}/>
    )
  }
}
export default DestinationContainer
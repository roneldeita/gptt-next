import React from 'react'
import Deals from '../presentation/Deals'

class CitiesContainer extends React.Component {
  constructor(props){
    super(props)
         this.state = {
      deals:[
        { img:'../static/images/banner/el-nido.jpg', title:'Cebu',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 10000 },
        { img:'../static/images/banner/el-nido.jpg', title:'Cebu',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 10000 },
        { img:'../static/images/banner/el-nido.jpg', title:'Cebu',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 10000 },                    
      ]
    }
  
  }
  render(){
    return(
      <Deals deals={this.state}/>
    )
  }
}
export default CitiesContainer
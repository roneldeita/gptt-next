import React from 'react'
import Video from '../presentation/Video'
//https://www.youtube.com/watch?v=ysz5S6PUM-U
class VideoContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	url : 'place the video here'
    }
  }

  render(){
    return(
      <Video {...this.state}/>
    )
  }
}
export default VideoContainer
import {Row, Col,Button} from 'antd'
import ReactPlayer from 'react-player'

const containerStyle = {
	style : {height:"700px",marginTop:"120px", marginBottom:"100px"}
}
export default (data) => {
	const {url} = data
	return (
		<div style={containerStyle.style}>
			<ReactPlayer
	          url={url}
	          className='react-player'
	          controls
	          width='100%'
	          height='100%'
	        />			
		</div>
	)
}
import {Row, Col,Card,BackTop,Icon} from 'antd'

const tempImage = 'http://via.placeholder.com/140x100'

const cityCardStyle = {
	addingTop:"150px",
	fontWeight: "bold",
	fontSize: "20px",
	color:"#ffffff"
}
const padds = {
	padding:"10px"
}
const containerCardStyle = {
	textAlign: "right",
	paddingTop:"20px"
}

const cityCard = (data) => (
	<div>
		<Row gutter={20} type="flex" justify="center">
			  {data.images.map((item, index) => {
			  		return(<Col xs={16} sm={12} md={8} lg={6} xl={4} key={index}>
						<Card
						bodyStyle={{height:"220px",backgroundImage:'url(' + item.img + ')'}}
						bordered={true}>
						<p style={cityCardStyle}>{item.slogan}</p>				  
						</Card>
						<Row style={padds}></Row>
					</Col>)            	
	          })}		     
    	</Row>
    </div>
)

export default (images) => {
	const CityCards = cityCard(images)
	return (
		<div>
			<BackTop />
			<Row>
				<Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
			    <Col xs={22} sm={20} md={18} lg={18} xl={18}>
			    	<Row>
			    		<Col span={12}><h1>Find homes locally</h1></Col>
			    		<Col span={12}><p style={containerCardStyle}>View All  <Icon type="right" /></p></Col>

			    	</Row>
			   		{CityCards}
			    </Col>
			    <Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
			</Row>
		</div>
	)
}


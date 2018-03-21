import {Row, Col,Button} from 'antd'

export default () => {
	const label = "It's Time For a New Adventure!Dont Wait Any Longer.Contact us!"
	return (
		<div>
			<Row style={{backgroundColor:"#323232"}}>
				<Col xs={0} sm={2} md={3} lg={3} xl={3}></Col>
			    <Col xs={24} sm={20} md={18} lg={18} xl={18}>
			    		 <Row style={{height:"200px"}} type="flex" justify="center" align="middle">
				    		<Col xs={{span:18,order:1}} sm={18} md={18} lg={18} xl={16}><p style={{fontSize:"30px",color:"#ffffff"}}>{label}</p></Col>
				    		<Col xs={{span:6,order:1}} sm={6} md={6} lg={6} xl={8}>
				    			 <Row type="flex" justify="end" align="top">
				    				<Button style={{width:"360px",height:"60px"}} type="primary">BOOK NOW!</Button>
				    			</Row>
				    		</Col>	    		
			    		</Row>
			    </Col>
			    <Col xs={0} sm={2} md={3} lg={3} xl={3}></Col>
			</Row> 
			<Row style={{ borderBottom: "1px solid grey"}}></Row>
		</div>
	)
}
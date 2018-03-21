import {Row, Col,Card,Collapse,Icon} from 'antd'
const tempImage = 'http://via.placeholder.com/140x100'

const { Meta } = Card;
const Panel = Collapse.Panel;

const text = (
  <p>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  </p>
)

const guideTitle = (
		<div>
			<h1 align="middle">Other Useful Information</h1>
		</div>
)
const guideMessage = (
		<div>
			<p align="middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
			<p align="middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
		</div>
)
const header = (
		<div>
			<Row>
				<Col span={12}>Lorem Ipsum</Col>
				<Col span={12} align="end" style={{paddingRight:"10px"}}><Icon type="down" /></Col>
			</Row>
			
		</div>
)
const guideTabs =(
		<div>
			<Row>
				<Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
			    <Col xs={22} sm={20} md={18} lg={18} xl={18}>
			 	   
					<Row gutter={16}>
			 			<Col xs={24} sm={24} md={8} lg={8} xl={8}>
			 				<Card
							    bordered={false}
							    cover={<img alt="example" src={tempImage} />}>
							    <Meta 
							      title="Private Guide Tour"
							      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
							    />
							</Card>
			 			</Col>
			 			<Col xs={24} sm={24} md={8} lg={8} xl={8}>
			 				<Card
							    bordered={false}
							    cover={<img alt="example" src={tempImage} />}>
							    <Meta
							      title="Special Tour Activities"
							      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
							    />
							</Card>

			 			</Col>
			 			
			 			<Col xs={24} sm={24} md={8} lg={8} xl={8}>
			 			 <Collapse bordered={false} defaultActiveKey={['0']}>
						    <Panel showArrow={false} header={header} key="1">
						      {text}
						    </Panel>
						    <Panel showArrow={false} header={header} key="2">
						      {text}
						    </Panel>
						    <Panel showArrow={false} header={header}key="3">
						      {text}
						    </Panel>
						  </Collapse>
			 			</Col>
			    	</Row>
			    </Col>
			    <Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
			</Row>

		    <style jsx global>{`
		      .ant-collapse-borderless .ant-collapse-item-active .ant-collapse-header{
		      	background-color:#DCDCDC 
		      }
		      .ant-card-body{
		      	padding: 1px;
		      	padding-top:20px;
		      	padding-right:10px;
		      	padding-bottom:20px;
    			zoom: 1;
		      }
		      .ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header {
				    padding-left: 12px;
			   }
			   .ant-collapse-borderless {
				    border-top:1px solid #D3D3D3;
				}
				.ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header p {
   				 margin-bottom: 0;
				}
		    `}</style>
		</div>
)
		     

export default () => {
	return (
		<div>
			{guideTitle}
			{guideMessage}
			{guideTabs}		
		</div>
	)
}
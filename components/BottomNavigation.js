import { Row, Col  } from 'antd'

import Content1 from './layout/bottomnavigation/content1'
import Content2 from './layout/bottomnavigation/content2'
import Content3 from './layout/bottomnavigation/content3'
import Content4 from './layout/bottomnavigation/content4'

const styles = {
	  margintop: "50px",
         minheight: "500px",
         paddingBottom:"50px",
}

export default () => (
  <div>
      <Row type="flex" justify="center" style={{backgroundColor:'#191d21'}}>
        <Col className="" xs={20} md={16}>
          <Row gutter={80} style={{ paddingBottom:"50px"}} type="flex" justify="center">
            <Col sm={24} md={6}>
            	<Content1/>
            </Col>
            <Col sm={24} md={6}>
				<Content2/>
            </Col>
            <Col sm={24} md={6}>
				<Content3/>
            </Col>
            <Col sm={24} md={6}>
				<Content4/>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{color:'white', textAlign:'center', backgroundColor:'white', paddingTop:'5px'}}>
            <h4 style={{ color:"#3f3f3f"}}>Copyright 2018 by Global Pinoy Travel & Tours. All Rights Reserved.</h4>
        </Col>
      </Row>
     
    </div>
)
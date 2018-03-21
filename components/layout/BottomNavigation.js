import { Row, Col,Divider  } from 'antd'
import css from '../../static/css/bottom-navigation.css'
import Content1 from './presentation/bottomcontents/Content1'
import Content2 from './presentation/bottomcontents/Content2'
import Content3 from './presentation/bottomcontents/Content3'
import Content4 from './presentation/bottomcontents/Content4'

const message = "Copyright 2018 by Global Pinoy Travel & Tours. All Rights Reserved."
export default () => 
  <div className={css.bottom}>
      <Row type="flex" justify="center" >
        <Col className="" xs={20} md={16}>
          <Row gutter={80} className={css.padding} type="flex" justify="center">
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            	<Content1/>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
				      <Content2/>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
				      <Content3/>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
				      <Content4/>
            </Col>
          </Row>
        </Col>
        <Col span={24} className={css.copyright}>
            <h4>{message}</h4>
        </Col>
      </Row>

  </div>


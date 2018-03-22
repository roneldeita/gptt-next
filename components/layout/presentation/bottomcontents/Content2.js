import { Row, Col,Divider } from 'antd'
import css from '../../../../static/css/bottom-navigation.css'

export default () => 
    <div>
      <Row type="flex" justify="center">
        <Col span={24} className={css.margintop50}>
          <h2 className={css.fontwhite}>Latest News</h2>
          <h4 className={css.fontdirtywhite}>Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 className={css.fontdarkgrey}>05.04.2018</h5>
          <h5 className={css.fontdirtywhite}> </h5>     
          <Divider />
        </Col>
        <Col span={24}>
          <h4 className={css.fontdirtywhite}>Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 className={css.fontdarkgrey}>05.04.2018</h5>
          <Divider />
        </Col>
        <Col span={24}>
          <h4 className={css.fontdirtywhite}>Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 className={css.fontdarkgrey}> 05.04.2018</h5>
        </Col>
      </Row>
    </div>


import { Row, Col } from 'antd'
import css from '../../../../static/css/bottom-navigation.css'
const tempImage = 'http://via.placeholder.com/140x100';

export default () => 
    <div className={css.margintop50} >
      <Row type="flex" justify="left" >
        <Row>
          <h2 className={css.fontwhite}>Gallery</h2>
        </Row>         
      </Row>
        <Row gutter={12}  className={css.margintop16}>
            <Col span={12}><img alt="Image1" src={tempImage}  className={css.width}/></Col>
            <Col span={12}><img alt="Image2" src={tempImage}  className={css.width}/></Col>
        </Row>
        <Row gutter={12} className={css.margintop16} >
            <Col span={12}><img alt="Image3" src={tempImage}  className={css.width}/></Col>
            <Col span={12}><img alt="Image4" src={tempImage}  className={css.width}  /></Col>
        </Row>
        <Row gutter={12} className={css.margintop16} >
            <Col span={12}><img alt="Image5" src={tempImage}  className={css.width}/></Col>
            <Col span={12}><img alt="Image6" src={tempImage}  className={css.width}/></Col>
       </Row>     
    </div>

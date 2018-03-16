import { Row, Col,Icon } from 'antd'
import css from '../../../../static/css/bottom-navigation.css'

const android = '../../../static/images/Android.png'
const apple = '../../../static/images/Apple.png'

const label1 = "Download GPPT App"
const label2 = "Connect with Global"
const label3 = "Pinoy Travel & Tours"

export default () => 
    <div>
      <Row type="flex">
        <h2 className={css.downloadlabel}>{label1}</h2>
            <Row gutter={6} >
              <Col span={12}><img alt="Android googleplay" src={android} className={css.size100}/></Col>
              <Col span={12}><img alt="Apple app store" src={apple} className={css.size100} /></Col>
            </Row>    
        <Row className={css.margintop50}>
            <h2 className={css.fontwhite}>{label2}</h2>
            <h2 className={css.fontwhite}>{label3}</h2>
            <Row gutter={6}>
              <Col span={6}><Icon type="facebook" className={css.facebook} /></Col>
              <Col span={6}><Icon type="twitter" className={css.twitter} /></Col>
              <Col span={6}><Icon type="linkedin" className={css.linkedin}/></Col>  
              <Col span={6}><Icon type="google-plus" className={css.googleplus}/></Col>             
            </Row>
        </Row>
      </Row>
    </div>



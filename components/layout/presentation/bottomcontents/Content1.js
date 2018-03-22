import { Row, Col  } from 'antd'
import css from '../../../../static/css/bottom-navigation.css'
const globalPinoyLogo = '../../../../static/images/globalpinoytravel-White.png';
const secureLogo = '../../../../static/images/Sec_Ass-01.png';
const IATALogo = '../../../../static/images/IATA-01.png';
const hrsLogo = '../../../../static/images/24HR-01.png';
export default () => 
    <div className={css.content1}>
      <div className={css.globalpinoylogo}>
        <Row>
            <Col span={24}><img alt="globalpinoytravel-White" src={globalPinoyLogo}/></Col>
        </Row>
      </div>
      <Row type="flex" justify="left" className={css.padding50}>
        <Row gutter={34} type="flex" justify="space-between">
            <Col span={8}><img alt="Secure Logo" src={secureLogo} className={css.bottomlogo} /></Col>
            <Col span={8}><img alt="IATA Logo" src={IATALogo} className={css.bottomlogo} /></Col>
            <Col span={8}><img alt="24HR Logo" src={hrsLogo} className={css.bottomlogo} /></Col>
        </Row>

        <Col className={css.padding20} span={24} >
          <h2>Customer Service</h2>
          <h4>+63-9XX-XXX-XXXX</h4>
          <h5>Email:support@mygprs.com</h5>
          <h5>Address: Floor,St.,Barangay,Quezon City</h5>
          <h5>Metro Manila Philippines 1000</h5>
          <h5>Offic Hours: Monday-Friday 8 30am -6 30pm</h5>
        </Col>
        
      </Row>
     
    </div>


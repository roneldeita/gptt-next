import React from 'react'
import { Row, Col  } from 'antd'

const Content = () => {
  return(
    <div>
      <Row type="flex" justify="center" style={{marginTop:"50px"}}>
        <Row type="flex" justify="space-between">
            <Col style={{paddingBottom:"30px"}} span={24}><img alt="globalpinoytravel-White" src={'../../../static/images/globalpinoytravel-White.png'} style={{width:"100%",maxWidth:"200px"}} /></Col>
            <Col span={8}><img alt="Sec_Ass-01" src={'../../../static/images/Sec_Ass-01.png'} style={{width:"50%", maxWidth:'50px'}} /></Col>
            <Col span={8}><img alt="IATA-01" src={'../../../static/images/IATA-01.png'} style={{width:"50%", maxWidth:'50px'}} /></Col>
            <Col span={8}><img alt="24HR-01" src={'../../../static/images/24HR-01.png'} style={{width:"50%", maxWidth:'50px'}} /></Col>
        </Row>

        <Col style={{paddingTop:"20px"}} span={24} >
          <h2 style={{paddingBottom:'10px',color:"#ffffff"}}>Customer Service</h2>
          <h4 style={{color:"#ffffff"}}>+63-9XX-XXX-XXXX</h4>
          <h5 style={{color:'#818387'}}>Email:support@mygprs.com</h5>
          <h5 style={{color:'#818387'}}>Address: Floor,St.,Barangay,Quezon City</h5>
          <h5 style={{color:'#818387'}}>Metro Manila Philippines 1000</h5>
          <h5 style={{color:'#818387'}}>Offic Hours: Monday-Friday 8 30am -6 30pm</h5>
        </Col>
        
      </Row>
     
    </div>
  )
}

export default Content
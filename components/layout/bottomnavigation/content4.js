import { Row, Col,Icon } from 'antd'

const txtwhite ={
  color:"#ffffff",
}

export default () => 
    <div>
      <Row type="flex">
        <h2 style={{color:"#ffffff",marginTop:'50px'}}>Download GPPT App</h2>
              <Row gutter={6} >
                <Col span={12}><img alt="Android" src={'../../../static/images/Android.png'} style={{width:"100%"}} /></Col>
                <Col span={12}><img alt="Apple" src={'../../../static/images/Apple.png'} style={{width:"100%"}} /></Col>
              </Row>
      
          <Row style={{marginTop:'50px'}}>
              <h2 style={txtwhite}>Connect with Global</h2>
              <h2 style={txtwhite}>Pinoy Travel & Tours</h2>
              <Row gutter={6}>
                <Col span={6}><Icon type="facebook" style={{ color: '#3B5998',fontSize: 30 }}/></Col>
                <Col span={6}><Icon type="twitter"  style={{ color: '#1DA1F2',fontSize: 30  }}/></Col>
                <Col span={6}><Icon type="linkedin" style={{ color: '#0077B5',fontSize: 30  }}/></Col>  
                <Col span={6}><Icon type="google-plus" style={{ color: '#DB4437',fontSize: 30  }}/></Col>             
              </Row>
          </Row>

      </Row>
     
    </div>



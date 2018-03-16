import { Row, Col } from 'antd'

export default () => {
  return(
    <div>
      <Row type="flex" justify="left" >
        <Row>
          <h2 style={txtwhite}>Gallery</h2>
        </Row>

      </Row>
        <Row gutter={12} style={{marginTop:'16px'}}>
            <Col span={12}><img alt="Image1" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img alt="Image2" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}} /></Col>
        </Row>
        <Row gutter={12} style={{marginTop:'16px'}} >
            <Col span={12}><img alt="Image3" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img alt="Image4" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
        </Row>
        <Row gutter={12} style={{marginTop:'16px'}} >
            <Col span={12}><img alt="Image5" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img alt="Image6" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
       </Row>

    </div>
  )
}
const txtwhite ={
  color:"#ffffff",
  marginTop:'50px'
}

import { Row, Col } from 'antd'

export default () => {
  return(
    <div>
      <Row type="flex" justify="center">
        <Col span={24} style={{marginTop:'50px'}}>
          <h2 style={txtwhite}>Latest News</h2>
          <h4 style={txtsemiwhite}>Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 style={txtdate}>05.04.2018</h5>
          <h5 style={txtsemiwhite}> </h5>     
          <h5 style={{marginTop:"20px",marginBottom:"15px"}} className="border"> </h5>
        </Col>
        <Col span={24}>
          <h4 style={txtsemiwhite}>Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 style={txtdate}>05.04.2018</h5>
          <h5 style={{marginTop:"20px",marginBottom:"15px"}} className="border"> </h5>
        </Col>
        <Col span={24}>
          <h4 style={txtsemiwhite}>Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 style={txtdate}>05.04.2018</h5>
        </Col>
      </Row>
    </div>
  )
}
const txtwhite ={
  color:"#ffffff"
}

const txtdate = {
  color:"#5c5e63"
}
const txtsemiwhite = {
  color:"#818387"
}
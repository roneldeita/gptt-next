import {Row, Col, Spin, Icon, Card} from 'antd'

//CSS here!
const containerCardStyle = {
  textAlign: "right",
  paddingTop:"20px"
}
const titleStyle = {
  styler :{fontWeight: "bold"}
}
const spacerStyle = {
  styler : {paddingTop:"20px",paddingBottom:"20px"}
}
const spacer =(
    <Row style={spacerStyle.styler}></Row>
)
const CardContentStyle = {
  container : {marginBottom:"10px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},
  cardCover : {height:"300px"},
  title :     {fontWeight: "bold",fontSize:"20px",color:"#191d21"},
  price :     {fontWeight: "bold",fontSize:"20px",textAlign: "end",color:"#0275b6"},
  Icon:       {fontSize: "20px"},
  bottomSpace:{marginTop:"20px"},
  clock :{color:"#768080",textAlign: "end"}
}

const Contents = (props) => {
      const {deals} = props.deals
      return <div>
                <Row gutter={16}>
                         
                  {deals.map((item, index) => {
                    return  <Col key={index} xs={24} sm={24} md={8} lg={8} xl={8}><CardContent deal={item}/></Col>
                  })}
                          
                </Row>               
             </div>
}


const CardContent = (deal) => {
  return(
    <div style={CardContentStyle.container}>
       <Card
        hoverable
        bordered={false}
        cover={<img alt="example" src="../static/images/banner/el-nido.jpg" style={CardContentStyle.cardCover} />}>
         <Row>
          <Col  span={1}></Col>
          <Col  xs={22} sm={22} md={22} lg={22} xl={22}> <Col xs={16} sm={16} md={16} lg={16} xl={16}><p style={CardContentStyle.title}>Hongkong DisneyLand</p></Col>
          <Col  xs={8} sm={8} md={8} lg={8} xl={8}><p style={CardContentStyle.price}>Php {"20,000"}</p></Col></Col>
          <Col  span={1}></Col>
      </Row>
      <Row>
          <Col  span={1}></Col>
          <Col  xs={22} sm={22} md={22} lg={22} xl={22}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Col>
          <Col  xs={1} sm={1} md={1} lg={1} xl={1}></Col>
      </Row>
      <Row>
          <Col   span={1}></Col>
          <Col   xs={22} sm={22} md={22} lg={22} xl={22}>
          <Row  style={CardContentStyle.bottomSpace}>
            <Col   xs={14} sm={14} md={14} lg={14} xl={14}>Inclusions:  <Icon type="car" style={CardContentStyle.Icon} />   <Icon type="car" style={CardContentStyle.Icon} />  <Icon type="car" style={CardContentStyle.Icon} /> </Col>
            <Col   xs={10}  sm={10}  md={10}  lg={10}  xl={10}><p style={CardContentStyle.clock}><Icon type="clock-circle-o" /> 7 Days</p></Col>
          </Row>
          </Col>
          <Col  span={1}></Col>
      </Row>
      </Card>
     
    </div>
    )
}


export default (props) => (
  <div>
      <Row>
        <Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
          <Col xs={22} sm={20} md={18} lg={18} xl={18}>
            {spacer}
            <Row>
              <Col span={12}><h1 style={titleStyle.styler}>Deals and Discounts</h1></Col>
              <Col span={12}><p style={containerCardStyle}>View All  <Icon type="right" /></p></Col>

            </Row>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}><Contents {...props}/></Col>
            </Row>
            {spacer}
          </Col>
          <Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
      </Row>
     
  </div>
)

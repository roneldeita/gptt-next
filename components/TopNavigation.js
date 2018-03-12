import Link from 'next/link'
import { Affix, Row, Col, Menu, Icon } from 'antd'
const Item = Menu.Item
const SubMenu = Menu.SubMenu

const AffixStyle = {
  width:"100%"
}
const AuthTab = {
  float:'right'
}

export default () => (
  <Affix style={AffixStyle}>
    <div className="menu-container">
      <Row className="" type="flex" justify="center">
        <Col xs={24} sm={7} md={5}>
          <Link href="/"><a><img className="logo" src="/static/images/globalpinoytravel.png"/></a></Link>
        </Col>
        <Col className="" span={9}>
          <Menu mode="horizontal" selectedKeys={['/']} className="ant-menu">
            <Item key="/"><Link href="/"><a>HOME</a></Link></Item>
            <Item key="/packages"><Link href="/packages"><a>PACKAGES</a></Link></Item>
            <Item key="/hotels"><Link href="/hotels"><a>HOTELS</a></Link></Item>
            <Item key="/flights"><Link href="/flights"><a>FLIGHTS</a></Link></Item>
            <Item key="/transfers"><Link href="/transfers"><a>TRANSFERS</a></Link></Item>
          </Menu>
        </Col>
        <Col span={3}>
          <Menu mode="horizontal">
            <Item className="" key="/login" style={AuthTab}><Link href="/login"><a><Icon type="user" />Login / Register</a></Link></Item>
          </Menu>
        </Col>
      </Row>
    </div>
    <style jsx global>{`
      .ant-menu{
        border: 0px !important;
        line-height: 70px !important;
      }
    `}
    </style>
    <style jsx>{`
      .logo{
        width: 155px;
        margin-bottom: -15px;
      }
      .menu-container{
        font-size: 14px;
        background-color: #ffffff;
        line-height: 70px;
        border-bottom: 1px solid #e8e8e8;
      }
    `}
    </style>
  </Affix>
)

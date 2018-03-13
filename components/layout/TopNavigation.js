import Link from 'next/link'
import { Affix, Row, Col, Menu, Icon } from 'antd'
import css from '../../static/css/top-navigation.css'
const Item = Menu.Item
const SubMenu = Menu.SubMenu

export default () => (
  <Affix className={css.affix}>
    <div className={css.menuContainer}>
      <Row className="" type="flex" justify="center">
        <Col xs={24} sm={7} md={5}>
          <Link href="/"><a><img className={css.logo} src="/static/images/globalpinoytravel.png"/></a></Link>
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
            <Item className="" key="/login" className={css.authTab}><Link href="/login"><a><Icon type="user" />Login / Register</a></Link></Item>
          </Menu>
        </Col>
      </Row>
    </div>
    <style jsx global>{`
      .ant-menu{
        border: 0px;
        line-height: 70px;
      }
    `}
    </style>
  </Affix>
)

import { Row, Col, Icon, Card } from 'antd'
import { GoogleLogin } from 'react-google-login'

import css from '../../static/css/login-form.css'

const googleButtonStyle = {
  width:'100%',
  height:'auto',
  padding:'10px 0px',
  marginBottom: '25px',
  color: '#444',
  border:'thin solid #888888'
}

export default ({responseGoogle}) => (
  <div className={css.container}>
    <Row type="flex" justify="center" gutter={20} style={{margin:0}}>
      <Col xs={24} sm={24} md={12} lg={7}>
        <Card>
          <p className={css.title}>Start emmediately using your social account</p>
          <p><Icon type="rocket"/> No more email validation.</p><br/>
          <GoogleLogin
            style={googleButtonStyle}
            className="ant-btn ant-btn-lg google-login"
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          ><Icon type="google"/> Login with Google
          </GoogleLogin>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={7}>
        <Card>
          <p className={css.title}>Login using your email</p><br/>
        </Card>
      </Col>
    </Row>
  </div>
)

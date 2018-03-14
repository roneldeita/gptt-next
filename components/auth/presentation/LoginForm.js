import { Form, Input, Row, Col, Icon, Card } from 'antd'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import css from '../../../static/css/login-form.css'

const FormItem = Form.Item;

const googleButtonStyle = {
  width:'100%',
  height:'auto',
  padding:'10px 0px',
  marginBottom: '25px',
  color: '#444444',
  border:'thin solid #888888'
}
const facebookButtonStyle = {
  width:'100%',
  height:'auto',
  padding:'10px 0px',
  marginBottom: '25px',
  color: '#ffffff',
  backgroundColor:'#3b5998'
}

export default ({form, onSubmit, responseGoogle, responseFacebook}) => (
  <div className={css.container}>
    <Row type="flex" justify="center" gutter={20} style={{margin:0}}>
      <Col xs={24} sm={24} md={12} lg={7}>
        <Card>
          <p className={css.title}>Start emmediately using your social account</p>
          <p><Icon type="rocket"/> No more email validation.</p><br/>
          <GoogleLogin
            style={googleButtonStyle}
            className="ant-btn"
            clientId="260337772129-ff01h5ua9ob0fvf5vik7c0und2279776.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          ><Icon type="google"/> Login with Google
          </GoogleLogin>
          <FacebookLogin
            appId="199102420673819"
            autoLoad={false}
            callback={responseFacebook}
            id="facebook-button"
            render={renderProps => (
              <button onClick={renderProps.onClick} className="ant-btn" style={facebookButtonStyle}><Icon type="facebook"/> Login with Facebook</button>
            )}
          />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={7}>
        <Card>
          <p className={css.title}>Login using your email</p><br/>
          <Form onSubmit={onSubmit}>
            <FormItem
              hasFeedback={form.isFieldTouched('Email')}
              validateStatus={form.getFieldError('Email') ? 'error' : 'success'}
              help={form.getFieldError('Email') || ''}>
              {form.getFieldDecorator('Email', {
                rules: [
                  { required: true },
                  { type: 'email' }
                ],
              })(
                <Input placeholder="Email" size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} /> }/>
              )}
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  </div>
)

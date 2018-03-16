import { Form, Input, Row, Col, Icon, Card, Button } from 'antd'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import css from '../../../static/css/login-form.css'

const FormItem = Form.Item;

const googleButtonStyle = {
  width:'100%',
  height:'auto',
  padding:'10px 0px',
  marginBottom: '25px',
  color: '#757575',
  border:'1px solid #cccccc'
}
const facebookButtonStyle = {
  width:'100%',
  height:'auto',
  padding:'10px 0px',
  marginBottom: '25px',
  color: '#ffffff',
  backgroundColor:'#3b5998'
}
const GoogleLogo = {
  width:'15px',
  marginBottom:'3px'
}

export default ({form, onSubmit, onClick, loginState, responseGoogle, responseFacebook}) => {
  const { isFieldTouched, getFieldError, getFieldDecorator } = form
  return (
    <div className={css.container}>
      <Row type="flex" justify="center" gutter={20} style={{margin:0}}>
        <Col xs={24} sm={24} md={12} lg={7}>
          <Card>
            <p className={css.title}>Start emmediately using your social account</p>
            <p><Icon type="rocket"/> No more email validation.</p><br/>
            <GoogleLogin
              style={googleButtonStyle}
              className="ant-btn"
              clientId={process.env.GOOGLE_CLIENT_ID}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            ><img src="/static/images/google-1015752_960_720.png" style={GoogleLogo} /> Login with Google
            </GoogleLogin>
            <FacebookLogin
              appId={process.env.FACEBOOK_APP_ID}
              autoLoad={false}
              callback={responseFacebook}
              id="facebook-button"
              render={renderProps => (
                <Button onClick={renderProps.onClick} className="ant-btn" style={facebookButtonStyle}><Icon type="facebook"/> Login with Facebook</Button>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={7}>
          <Card>
            <p className={css.title}>Login using your email</p><br/>
            <Form onSubmit={onSubmit}>
              <FormItem
                hasFeedback={isFieldTouched('Email')}
                validateStatus={getFieldError('Email') ? 'error' : 'success'}
                help={getFieldError('Email') || ''}>
                {getFieldDecorator('Email', {
                  rules: [
                    { required: true },
                    { type: 'email' }
                  ],
                })(
                  <Input placeholder="Email" size="large"/>
                )}
              </FormItem>
              <FormItem
                hasFeedback={isFieldTouched('Password')}
                validateStatus={getFieldError('Password') ? 'error' : 'success'}
                help={getFieldError('Password') || ''}>
                {getFieldDecorator('Password', {
                  rules: [
                    { required: true },
                    { min: 6}
                  ],
                })(
                  <Input placeholder="Password" type="password" size="large"/>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" size="large" htmlType="submit" loading={loginState} onClick={onClick} style={{marginRight:'8px'}}>Log in</Button>
                <p style={{display:'inline-block'}}>No account yet? <a href='/register'> Register</a></p>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

import "./login.css";
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
function Login() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    localStorage.setItem('token','sgkhgkalhg4qk4hvzhovdwwavlj')
    navigate('/layout/home');
    console.log('Success:', values);
  };
  return(
    <div className="login-container">
      <Form
        name="login-form"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          width: 600,
        }}
        initialValues={{
          username: '13713746864',
          code:'123456',
          password: 111111,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
            () => ({
              // 自定义检验
              validator(_, value) {
                if(value === '13713746864'){
                  return Promise.resolve();
                }
                return Promise.reject(new Error('校验不通过!'));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login;
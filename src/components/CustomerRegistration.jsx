import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, InputNumber, Select, Space } from 'antd';
import { Option } from 'antd/es/mentions';
import { useNavigate } from 'react-router-dom';
const CustomerRegistrationForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');



  const handleRegistration = async (e) => {

    const formData = {
      username:username,
      password:password,
      age:age,
      email:email,
      introduction:introduction,
      website:website,
      address:address,
      street:street
    }
    try {
      const response = await axios.post('http://localhost:8000/api/customer/register', formData);
      navigate("/login")
      console.log(response.data.message);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',

    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2>Registration</h2>
     
      <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
          min: 0,
          max: 20,
        },
      ]}
      value={username}
        onChange={(e) => setUsername(e.target.value)}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
          required: true,
        },
      ]}
      value={email}
        onChange={(e) => setEmail(e.target.value)}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          required: true,
          min: 0,
          max: 99,
        },
      ]}
      value={age}
        onChange={(e) => setAge(e.target.value)}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website"
     rules={[
        {
          required: true,

        },
      ]}
      value={website}
        onChange={(e) => setWebsite(e.target.value)}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
          value={address}
        onChange={(e) => setAddress(e.target.value)}
        >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Street is required',
            },
          ]}
          value={street}
        onChange={(e) => setStreet(e.target.value)}
        >
          <Input
            style={{
              width: '50%',
            }}
            placeholder="Input street"
          />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction"
      rules={[
        {
          required: true,

        },
      ]}
      value={introduction}
        onChange={(e) => setIntroduction(e.target.value)}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      name={['user', 'password']}
      label="Password"
      rules={[
        {
          required: true,
        },
      ]}
      value={password}
        onChange={(e) => setPassword(e.target.value)}
    >
      <Input />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button onClick={handleRegistration} type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  );
};

export default CustomerRegistrationForm;







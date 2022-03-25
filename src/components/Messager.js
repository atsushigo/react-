import React, {useState} from 'react';
import { Form, Row, Col, Input, Button, Select, Tooltip } from 'antd';
import { withTranslation } from 'react-i18next'; 
import { withTheme } from "styled-components";
import axios from "axios";

const { TextArea } = Input;
const { Option } = Select;
axios.defaults.baseURL = "https://api.telegram.org/bot1486088406:AAENXb92z9iNzjgeFIktntKxK58j6Fo-alg";

const formItemLayout = {
  labelCol: {
    xs: { span: 12 },
    sm: { span: 6 }    
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const msgLayout = {
  labelCol: {
    xs: { span: 12 },
    sm: { span: 3, offset: 0 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const tailLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 12 },
  }
};

const Messager = (props) => {
  const [form] = Form.useForm();  
  const {t} = props; 
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState('');
  const [tipColor, setTipColor] = useState('green');
  const defaultValue = (!props.index || props.index < 0)
                        ? ''
                        : {
                          0 : 'business',                              
                          1 : 'branding',
                          2 : 'support',
                          3 : 'career'
                        }[ props.index ];

  const handleSendResult = (clr, tip) => {
    setTipColor(clr);
    setNotification(tip);
    setSending(false);
    setTimeout(()=>{
      setNotification('');
    }, 5000);
  };

  const onFinish = (values) => {    
    setSending(true);
    const sendData = async () => {
      const { data = {} } = await axios.post('/sendMessage', {chat_id:-321010467, text:JSON.stringify(values)});
      if (data.ok) {
        form.resetFields();
        handleSendResult('green', t("tip.success"));
      } else {
        handleSendResult('red', t("tip.failed"));
      }
    };
    
    sendData();
  };

  const labelColor = props.theme.mode === "dark" ? "#EEE" : "#5A5A5A";
  return (   
    <Form {...formItemLayout} form={form} name="msg-hooks" onFinish={onFinish} initialValues={{ subject: defaultValue }}>
      <Row gutter={16}>
        <Col span={12} key={0}>
          <Form.Item name="name" label={<label style={{color: labelColor}}>{t("tip.name")}</label>} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12} key={1}>
          <Form.Item name="subject" label={<label style={{color: labelColor}}>{t("tip.subject")}</label>} rules={[{ required: true }]}>
            <Select placeholder={t("tip.choose")} allowClear>
              <Option value="business">{t("tip.business")}</Option>
              <Option value="branding">{t("tip.branding")}</Option>
              <Option value="support">{t("tip.support")}</Option>
              <Option value="career">{t("tip.career")}</Option>
              <Option value="other">{t("tip.other")}</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12} key={2}>
          <Form.Item name="phone" label={<label style={{color: labelColor}}>{t("tip.phone")}</label>} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12} key={3}>
          <Form.Item name="email" label={<label style={{color: labelColor}}>{t("tip.email")}</label>}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
     
      <Form.Item {...msgLayout} name="message" label={<label style={{color: labelColor}}>{t("tip.message")}</label>} rules={[{ required: true }]}>
        <TextArea rows={4} placeholder={t("tip.msgtip")} maxLength={100} />
      </Form.Item>
      
      <Form.Item {...tailLayout}>
        <Tooltip title={notification} visible={notification.length > 0} color={tipColor}>
        <Button type="primary" htmlType="submit" disabled={sending}>
          {t("tip.send")}
        </Button>    
        </Tooltip>  
      </Form.Item>
    </Form>
  );
};

export default withTheme(withTranslation()(Messager));

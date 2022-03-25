import React, { Component } from "react";
import { Modal,Card, Col, Row, Divider } from 'antd';
import { withTranslation } from 'react-i18next'; 
import {isMobile} from '../Constants';

const { Meta } = Card;
const PopWidth = document.body.clientWidth * (isMobile ? 0.8 : 0.5);
const PopHeight = PopWidth * 624 / 1280;


class NewsItems extends Component {
  constructor(props) {
    super(props);   
    this.state = {visible: false, itemIndex: 0};
    this.totalNews = props.totalNews || 0;
    this.rows = [];
    for (let i = 0; i < this.totalNews/(isMobile?2:3); i++) {
      this.rows.push(i);
    }
    if (this.totalNews % (isMobile?2:3) > 0) this.rows.push(this.rows.length);
  };

  showModal = (index) => {
    this.setState({
      visible: true,
      itemIndex: index
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  showRow(rowNum) {
    const {t} = this.props;  
    const startIndex = rowNum * (isMobile ? 2:3);
    let items = [];
    if (startIndex < this.totalNews) items.push(startIndex);
    if((startIndex + 1) < this.totalNews) items.push(startIndex + 1);

    let text;
    if (items.length > 0) {
      if (isMobile) {      
        text = <Row gutter={12} style={{marginBottom:'10px'}} key={rowNum}>
                {
                  items.map((item) =>
                    <Col span={12} key={item}>                     
                      <Card hoverable key={item} onClick={this.showModal.bind(this, item)}
                        cover={<img alt={item} src={`./img/news/${item}.jpg`} />}
                      >
                        <Meta title={t(`home.news${item}`)} description={t(`home.newsdes${item}`)} />
                      </Card>                      
                    </Col>
                  )
                } 
              </Row>
      } else {
        if((startIndex + 2) < this.totalNews) items.push(startIndex + 2);
        text = <Row gutter={16} style={{marginBottom:'20px'}} key={rowNum}>
                {
                  items.map((item) =>
                    <Col span={8} key={item}>                     
                      <Card hoverable key={item} onClick={this.showModal.bind(this, item)}
                        cover={<img alt={item} src={`./img/news/${item}.jpg`} />}
                      >
                        <Meta title={t(`home.news${item}`)} description={t(`home.newsdes${item}`)} />
                      </Card>                      
                    </Col>
                  )
                } 
              </Row>
      }
    }
    
    return text;
  }

  render() {     
    const { visible, itemIndex } = this.state;
    const {t} = this.props;
    return (
      <div>    
        {
            this.rows.map((rowNum) =>
              this.showRow(rowNum)
            )
        }
        <Modal
          visible={visible}
          title={t(`home.news${itemIndex}`)}         
          onCancel={this.handleCancel}
          width={PopWidth + 48}
          footer={null}
        >
          <p style={{textAlign: 'right'}}>{t(`home.newsdate${itemIndex}`)}</p>
          <p>{t(`home.newsdes${itemIndex}`)}</p>
          <img alt="0" src={`./img/news/${itemIndex}.jpg`} width={PopWidth} height={PopHeight} />
          <Divider />
          <p style={{textAlign: 'right'}}>{t('home.newsfrom')}</p>
        </Modal>    
      </div> 
    );
  };
}

export default withTranslation() (NewsItems);

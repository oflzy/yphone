import React from 'react';
import { Card, Row, Col, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import products from '../utils/products';

const { Title } = Typography;

const categories = [
  { key: 'phone', name: '手机' },
  { key: 'jd', name: '京东E卡' },
  { key: 'oil', name: '中石化加油卡' },
];

export default function Home() {
  return (
    <div>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>USDT商城</Title>
      {categories.map(cat => (
        <div key={cat.key} style={{ marginBottom: 40 }}>
          <Divider orientation="left" orientationMargin={0}>{cat.name}</Divider>
          <Row gutter={[24, 24]}>
            {products[cat.key].slice(0, 3).map(item => (
              <Col xs={24} sm={12} md={8} key={item.id}>
                <Link to={`/product/${cat.key}/${item.id}`}>
                  <Card
                    hoverable
                    cover={<img alt={item.name} src={item.img} style={{ height: 180, objectFit: 'contain' }} />}
                  >
                    <Card.Meta title={item.name} description={`约 ${item.usdt} USDT`} />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
} 
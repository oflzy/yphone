import React from 'react';
import { Card, List, Button, Typography } from 'antd';

const { Title } = Typography;

export default function Cart() {
  // 这里只做UI演示，实际可用localStorage或全局状态管理
  return (
    <Card style={{ maxWidth: 600, margin: '32px auto' }}>
      <Title level={3}>购物车</Title>
      <List
        dataSource={[]}
        renderItem={item => (
          <List.Item>
            <div>{item.name} - {item.usdt} USDT</div>
          </List.Item>
        )}
        locale={{ emptyText: '购物车为空' }}
      />
      <div style={{ margin: '24px 0', fontWeight: 500 }}>总价：0 USDT</div>
      <Button type="primary" block disabled>仅支持USDT支付（演示）</Button>
    </Card>
  );
} 
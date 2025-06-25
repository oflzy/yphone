import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Descriptions, Select, Typography } from 'antd';
import products from '../utils/products';
import usdtRate from '../utils/usdtRate';

const { Title } = Typography;

export default function ProductDetail() {
  const { type, id } = useParams();
  const product = products[type].find(p => String(p.id) === id);
  const [amount, setAmount] = React.useState(product.amounts ? product.amounts[0] : undefined);

  if (!product) return <div>商品不存在</div>;

  const price = amount ? (amount / usdtRate).toFixed(2) : product.usdt;

  return (
    <Card style={{ maxWidth: 600, margin: '32px auto' }}>
      <img src={product.img} alt={product.name} style={{ width: '100%', maxHeight: 260, objectFit: 'contain', marginBottom: 24 }} />
      <Title level={3}>{product.name}</Title>
      {type === 'phone' ? (
        <Descriptions column={1} bordered size="small">
          {Object.entries(product.detail).map(([k, v]) => (
            <Descriptions.Item label={k} key={k}>{v}</Descriptions.Item>
          ))}
        </Descriptions>
      ) : (
        <>
          <div style={{ margin: '16px 0' }}>
            <span>选择面额：</span>
            <Select
              value={amount}
              onChange={setAmount}
              options={product.amounts.map(a => ({ label: `${a} 元（约 ${(a/usdtRate).toFixed(2)} USDT）`, value: a }))
              style={{ width: 240 }}
            />
          </div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>USDT价格：{price} USDT</div>
        </>
      )}
    </Card>
  );
} 
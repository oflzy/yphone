import React from 'react';
import { Layout, FloatButton } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Chatbot from './components/Chatbot';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', boxShadow: '0 2px 8px #f0f1f2' }}>
        <div style={{ float: 'left', fontWeight: 'bold', fontSize: 22 }}>
          <Link to="/">USDT商城</Link>
        </div>
        <div style={{ float: 'right' }}>
          <Link to="/cart">购物车</Link>
        </div>
      </Header>
      <Content style={{ padding: '32px 16px 0', background: '#f5f6fa', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:type/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center', fontSize: 12, color: '#888' }}>
        温馨提示：本平台所有商品价格均以USDT结算，支付时请核对收款地址。若因网络延迟或第三方原因导致USDT未及时到账，相关风险由用户自行承担。商品信息仅供参考，具体以实际发货为准。因不可抗力或第三方服务异常造成的损失，本平台不承担相关责任，敬请谅解。
      </Footer>
      <FloatButton icon={<span style={{ fontSize: 18 }}>🤖</span>} onClick={() => Chatbot.open()} tooltip="智能客服" style={{ right: 24, bottom: 80 }} />
      <Chatbot />
    </Layout>
  );
} 
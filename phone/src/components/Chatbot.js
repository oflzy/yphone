import React from 'react';
import { Modal, Input, Button, List } from 'antd';

let openModal;

export default function Chatbot() {
  const [visible, setVisible] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { from: 'bot', text: '您好，有什么可以帮您？' }
  ]);
  const [input, setInput] = React.useState('');

  openModal = () => setVisible(true);

  const send = () => {
    if (!input) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: '智能客服暂未接入，敬请期待。' }]);
    setInput('');
  };

  return (
    <Modal
      open={visible}
      onCancel={() => setVisible(false)}
      footer={null}
      title="智能客服"
      width={360}
      bodyStyle={{ minHeight: 320 }}
    >
      <List
        dataSource={messages}
        renderItem={msg => (
          <List.Item style={{ justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{ background: msg.from === 'user' ? '#e6f7ff' : '#f5f5f5', padding: '6px 12px', borderRadius: 8 }}>{msg.text}</div>
          </List.Item>
        )}
        style={{ marginBottom: 16, maxHeight: 220, overflowY: 'auto' }}
      />
      <Input.Group compact>
        <Input
          style={{ width: '75%' }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onPressEnter={send}
          placeholder="请输入..."
        />
        <Button type="primary" onClick={send}>发送</Button>
      </Input.Group>
    </Modal>
  );
}

Chatbot.open = () => openModal && openModal(); 
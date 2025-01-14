import { Card as AntdCard } from 'antd';

function Card({ style, ...rest }) {
  return <AntdCard style={{ marginBottom: 20 }} {...rest} />;
}

export default Card;

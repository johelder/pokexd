import { Layout } from 'antd';

import styles from './styles.module.less';

const { Header: AntdHeader } = Layout;

interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <AntdHeader className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </AntdHeader>
  );
};

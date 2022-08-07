import Link from 'next/link';

import { Dropdown, Menu } from 'antd';

import { TCG } from '../../dtos';

import styles from './styles.module.less';

interface ITypeButtonProps {
  types: TCG[];
}

export const TypeButton = ({ types }: ITypeButtonProps) => {
  return (
    <Dropdown
      overlay={() => (
        <Menu
          items={types.map(type => ({
            key: type,
            label: (
              <Link href={`pokemons/${type}`}>
                <a>{type}</a>
              </Link>
            ),
          }))}
          theme="dark"
        />
      )}
      className={styles.container}
    >
      <a onClick={event => event.preventDefault()}>Get a type</a>
    </Dropdown>
  );
};

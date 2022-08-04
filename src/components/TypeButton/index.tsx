import { Button } from 'antd';

import styles from './styles.module.less';

export type TCG =
  | 'Colorless'
  | 'Darkness'
  | 'Dragon'
  | 'Fairy'
  | 'Fighting'
  | 'Fire'
  | 'Grass'
  | 'Lightning'
  | 'Metal'
  | 'Psychic'
  | 'Water';

interface ITypeButtonProps {
  type: TCG;
}

export const TypeButton = ({ type }: ITypeButtonProps) => {
  return (
    <Button
      className={styles[`${type.toLowerCase()}`]}
      size="large"
      type="primary"
    >
      {type}
    </Button>
  );
};

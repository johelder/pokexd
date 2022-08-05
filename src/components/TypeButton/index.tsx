import Link from 'next/link';

import { Tag } from 'antd';

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
  const colors = {
    Colorless: '#e5d6d0',
    Darkness: '#2c2e2b',
    Dragon: '#c6a114',
    Fairy: '#e03a83',
    Fighting: '#ff501f',
    Fire: '#e24242',
    Grass: '#7db808',
    Lightning: '#fab536',
    Metal: '#8a776e',
    Psychic: '#a65e9a',
    Water: '#5bc7e5',
  };

  return (
    <Tag color={colors[type]}>
      <Link href={`pokemons/${type}`}>
        <a>{type}</a>
      </Link>
    </Tag>
  );
};

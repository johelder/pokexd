import Image from 'next/image';
import { memo } from 'react';

import { Card as AntdCard } from 'antd';

const { Meta } = AntdCard;

import styles from './styles.module.less';

export interface IPokemon {
  id: string;
  images: {
    small: string;
    large: string;
  };
  subtypes: string[];
  types: string[];
  weaknesses: {
    type: string;
    value: string;
  }[];
  attacks: {
    name: string;
    text: string;
  }[];
}

interface ICardProps {
  pokemon: IPokemon;
}

const Card = ({ pokemon }: ICardProps) => {
  const [type] = pokemon.types;

  return (
    <AntdCard
      hoverable
      cover={
        <Image
          src={pokemon.images.small}
          alt="Pokemon Trading Card"
          width="200px"
          height="250px"
        />
      }
      className={styles[`${type.toLowerCase()}`]}
    >
      <Meta
        title={
          <div>
            <span></span>
          </div>
        }
      />
    </AntdCard>
  );
};

export default memo(Card);

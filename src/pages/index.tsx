import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import { PokemonTCG } from '../services/pokemontcg';

import { TypeButton } from '../components';
import { TCG } from '../components/TypeButton';
import { Layout, Typography } from 'antd';

import banner from '../assets/images/banner.jpg';

import styles from './home.module.less';

const { Content: AntdContent } = Layout;
const { Title } = Typography;

interface IHomeProps {
  types: TCG[];
}

const Home = ({ types }: IHomeProps) => {
  return (
    <>
      <Head>
        <title>Home | pokexd</title>
      </Head>

      <aside className={styles.bannerContainer}>
        <Image src={banner} alt="An bulbasaur banner" />
      </aside>

      <AntdContent className={styles.content}>
        <Title>pokexd</Title>
        <Title level={2}>
          Find your favorites card from Pokemon Trading Card Game
        </Title>

        <ul>
          {types.map(type => (
            <li key={type}>
              <TypeButton type={type} />
            </li>
          ))}
        </ul>
      </AntdContent>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await PokemonTCG.getAllTypes();

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const timeToRevalidate = 60 * 60 * 24;

  return {
    props: {
      types: response.data,
    },
    revalidate: timeToRevalidate,
  };
};

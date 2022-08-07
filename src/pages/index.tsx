import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { PokemonTCG } from '../services/pokemontcg';

import { TypeButton } from '../components';
import { TCG } from '../dtos';
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

      <div className={styles.container}>
        <aside className={styles.bannerContainer}>
          <img
            src={banner.src}
            alt="An bulbasaur banner"
            className={styles.image}
          />
        </aside>

        <AntdContent className={styles.content}>
          <div className={styles.separator}>
            <Title>pokexd</Title>
          </div>
          <Title level={2}>
            Find your favorites card from Pokemon Trading Card Game
          </Title>

          <TypeButton types={types} />
        </AntdContent>
      </div>
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

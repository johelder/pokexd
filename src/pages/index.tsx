import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { PokemonTCG } from '../services/pokemontcg';

import { TCG, TypeButton } from '../components/TypeButton';
import { Layout } from 'antd';

import styles from './home.module.less';

const { Content: AntdContent } = Layout;

interface IHomeProps {
  types: TCG[];
}

const Home = ({ types }: IHomeProps) => {
  return (
    <>
      <Head>
        <title>Home | pokexd</title>
      </Head>

      <main>
        <AntdContent className={styles.content}>
          {types.map(type => (
            <TypeButton type={type} />
          ))}
        </AntdContent>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await PokemonTCG.getAllTypes();

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const { data: types } = response.data;

  return {
    props: {
      types,
    },
  };
};

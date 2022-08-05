import { useRouter } from 'next/router';
import Head from 'next/head';

import { useCallback, useEffect, useState } from 'react';

import Card, { IPokemon } from '../../components/Card';

import { PokemonTCG } from '../../services/pokemontcg';
import { Layout, Typography, Col, Row } from 'antd';

import styles from './styles.module.less';

const { Content: AntdContent } = Layout;
const { Title } = Typography;

interface IRouteProps {
  slug: string;
}

type IPageStatus = 'idle' | 'loading' | 'resolved' | 'error';

const ListType = () => {
  const [pokemons, setPokemons] = useState<IPokemon[] | undefined>([]);
  const [pageStatus, setPageStatus] = useState<IPageStatus>('idle');

  const router = useRouter();
  const { slug } = router.query as unknown as IRouteProps;

  const getCards = useCallback(async () => {
    setPageStatus('loading');
    const response = await PokemonTCG.getCardsByType(slug);

    if (!response.ok) {
      setPageStatus('error');
      return;
    }

    setPokemons(response.data);
    setPageStatus('resolved');
  }, [slug]);

  useEffect(() => {
    getCards();
  }, [getCards]);

  if (pageStatus === 'loading') {
    return <h1>carregando...</h1>;
  }

  if (pageStatus === 'error') {
    return <h1>error...</h1>;
  }

  return (
    <>
      <Head>
        <title>{slug} | pokexd</title>
      </Head>

      <AntdContent className={styles.content}>
        <Title level={3}>{slug}</Title>

        <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}>
          {pokemons?.map(pokemon => (
            <Col key={pokemon.id}>
              <Card pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </AntdContent>
    </>
  );
};

export default ListType;

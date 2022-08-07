import { useRouter } from 'next/router';
import Head from 'next/head';

import { useCallback, useEffect, useState } from 'react';

import { Card } from '../../components';

import { TPageStatus, IPokemon } from '../../dtos';

import { PokemonTCG } from '../../services/pokemontcg';
import { Layout, Col, Row, PageHeader, Spin, notification } from 'antd';

import styles from './styles.module.less';

const { Content: AntdContent } = Layout;

interface IRouteProps {
  slug: string;
}

const ListType = () => {
  const [pokemons, setPokemons] = useState<IPokemon[] | undefined>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');

  const router = useRouter();
  const { slug } = router.query as unknown as IRouteProps;

  const getCards = useCallback(async () => {
    if (!slug) {
      return;
    }

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
    return (
      <article className={styles.loadingContainer}>
        <Spin size="large" />
      </article>
    );
  }

  if (pageStatus === 'error') {
    notification.destroy();
    notification.error({
      message: 'Failed to load cards',
      description: 'You can try again later!',
      maxCount: 1,
    });

    router.push('/');
    return;
  }

  return (
    <>
      <Head>
        <title>{slug} | pokexd</title>
      </Head>

      <div className={styles.headerTitleContainer}>
        <PageHeader
          title="pokexd"
          onBack={() => router.back()}
          className={styles.headerTitle}
        />
      </div>

      <AntdContent className={styles.content}>
        <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }} wrap justify="center">
          {pokemons?.map(pokemon => (
            <Col key={pokemon.id} className={styles.columnContainer}>
              <Card pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </AntdContent>
    </>
  );
};

export default ListType;

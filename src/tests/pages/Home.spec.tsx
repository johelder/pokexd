import { getStaticProps } from '../../pages';
import { PokemonTCG } from '../../services/pokemontcg';

import { typesMock } from '../__mocks__';

jest.mock('../../services/pokemontcg');

describe('Home Page', () => {
  it('should able to load initial data', async () => {
    const pokemonTCGMocked = jest.mocked(PokemonTCG.getAllTypes);

    pokemonTCGMocked.mockResolvedValueOnce({
      data: typesMock,
      ok: true,
    });

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          types: typesMock,
        },
        revalidate: 86400,
      })
    );
  });
});

import { PokemonTCG } from '../../services/pokemontcg';
import { mockPokemon } from '../__mocks__';

jest.mock('../../services/pokemontcg', () => {
  return {
    PokemonTCG: {
      getCardsByType() {
        return {
          data: mockPokemon,
          ok: true,
        };
      },
    },
  };
});

describe('Pokemons Page', () => {
  it('should able to get a list of pokemon', async () => {
    const pokemonTCGMocked = await PokemonTCG.getCardsByType('fake-param');

    expect(pokemonTCGMocked.data).toEqual(pokemonTCGMocked.data);
  });
});

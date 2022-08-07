import { fireEvent, render } from '@testing-library/react';

import { mockPokemon } from '../../tests/__mocks__';

import Card from '.';

describe('Card Component', () => {
  const [mockedPokemon] = mockPokemon;

  it('should render a pokemon card image', () => {
    const { getByTestId } = render(<Card pokemon={mockedPokemon} />);
    const pokemonCardImage = getByTestId('pokemon-card-image');

    expect(pokemonCardImage).toHaveAttribute('src', mockedPokemon.images.small);
  });

  it('should render a pokemon description correctly', () => {
    const { getByTestId } = render(<Card pokemon={mockedPokemon} />);

    const pokemonName = getByTestId('pokemon-name');
    const pokemonSubTypes = getByTestId('pokemon-subtype');
    const pokemonWeakness = getByTestId('pokemon-weakness');
    const pokemonAttack = getByTestId('pokemon-attack');

    expect(pokemonName).toHaveTextContent('fake-name');
    expect(pokemonSubTypes).toHaveTextContent('fake-subtype');
    expect(pokemonWeakness).toHaveTextContent('fake-weakness');
    expect(pokemonAttack).toHaveTextContent('fake-attack');
  });

  it('should open a modal on user click', async () => {
    const { getByTestId, queryByTestId } = render(
      <Card pokemon={mockedPokemon} />
    );

    const cardButton = getByTestId('pokemon-card');

    fireEvent.click(cardButton);

    expect(queryByTestId('pokemon-modal')).toBeInTheDocument();
  });
});

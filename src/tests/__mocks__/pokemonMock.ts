import { IPokemon } from '../../dtos';

export const mockPokemon: IPokemon[] = [
  {
    id: 'fake-id',
    name: 'fake-name',
    images: {
      small: 'fake-small-image',
      large: 'fake-large-image',
    },
    subtypes: ['fake-subtype'],
    types: ['fake-type'],
    weaknesses: [
      {
        type: 'fake-weakness-type',
        value: 'fake-weakness-value',
      },
    ],
    attacks: [
      {
        name: 'fake-attack-name',
        text: 'fake-attack-text',
      },
    ],
  },
];

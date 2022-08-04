import { api } from './api';

export const PokemonTCG = {
  async getAllTypes() {
    try {
      const response = await api.get('/types');

      return {
        data: response.data,
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  },
};

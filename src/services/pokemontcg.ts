import { api } from './api';

import { TCG } from '../components/TypeButton';
import { IPokemon } from '../components/Card';

interface IAllTypesRequest {
  data: TCG[];
}

interface ICardsByTypeRequest {
  data: IPokemon[];
}

export const PokemonTCG = {
  async getAllTypes() {
    try {
      const response = await api.get<IAllTypesRequest>('/types');

      const { data } = response.data;

      return {
        data,
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  },

  async getCardsByType(type: string) {
    try {
      const response = await api.get<ICardsByTypeRequest>(
        `/cards/?q=types:${type}&pageSize=40`
      );

      const { data } = response.data;

      return {
        data,
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

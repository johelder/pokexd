import axios from 'axios';

const namespace = '/v2';

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_POKEMON_TCG_API_BASE_URL}${namespace}`,
  headers: {
    'X-Api-Key': process.env.POKEMON_TCG_API_KEY!,
  },
});

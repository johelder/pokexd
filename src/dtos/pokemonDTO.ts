export interface IPokemon {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  subtypes: string[];
  types: string[];
  weaknesses: {
    type: string;
    value: string;
  }[];
  attacks: {
    name: string;
    text: string;
  }[];
}

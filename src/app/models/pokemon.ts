export interface PokemonsPage {
  count: number;
  // next: string;
  // previous: string;
  results: [{ name: string; url: string }];
}

export interface Pokemon {
  id: number;
  name: string;
  // url: string;
  height?: number;
  weight?: number;
  sprites?: {
    front_default: string;
    back_default: string;
  };
  cries?: {
    latest: string;
  };
  types?: [{ id: number; name: string }];
  stats?: [{ id: number; name: string; base_stat: number }];
  ability?: { id: number; name: string };
}

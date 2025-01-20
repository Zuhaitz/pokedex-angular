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
  sprites?: {
    front_default: string;
    back_default: string;
  };
}

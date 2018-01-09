export interface Czas { // czy interface czy class?
  id?: string;
  wll: number;
  l1: number;
  szt: number;
  min: number;
  date?: number;
}

export interface  CzasId extends Czas {
  id: string;
}

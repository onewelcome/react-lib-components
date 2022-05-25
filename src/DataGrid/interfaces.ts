export type ColumnName = string;
export type Direction = 'ASC' | 'DESC';
export type Sort = {
  name: ColumnName;
  direction: Direction;
}[];
export type OnSortFunction = (sort: Sort) => void;

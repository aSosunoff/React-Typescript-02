type typeFilter = 'list' | 'text' | 'button';

type CreateType<T extends typeFilter> = T extends typeFilter
  ? { type: T, detail: object }
  : never;

type ListType = CreateType<'list'>
  & { items: Array<{ id: string | number, text: string }> };

type TextType = CreateType<'text'>;

type ButtonType = CreateType<'button'>
  & {
    icon: string,
    handler: (callback: (value: string | number | null, additionalProperties?: object) => void) => void
  }

type _TSettings = {
  [K: string]: { filter: ListType | TextType | ButtonType }
}

export type FilterReturnType<TItem extends object = {}> = {
  filteredList: TItem[],
  filterState: object,
  filterPanel: object,
  isFilter: boolean,
  setFilterHandler: (field: string, value: string | number | null, additionalProperties?: object) => void,
  clearFilterHandler: () => void,
}

export const useFilter = <TItem extends object, TSettings extends _TSettings>
  (list: TItem[], settings: TSettings): FilterReturnType<TItem> => ({}) as FilterReturnType<TItem>;

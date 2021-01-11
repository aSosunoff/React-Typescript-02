type typeFilter = 'list' | 'text' | 'button' | 'checkbox';

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

type CheckboxType = CreateType<'checkbox'>;

type _TSettings = {
  [K: string]: { filter: ListType | TextType | ButtonType | CheckboxType }
}


export const useFilter = <TItem extends object, TSettings extends _TSettings, TFilterReturnType extends {
  filteredList: TItem[],
  filterState: object,
  filterPanel: object,
  isFilter: boolean,
  setFilterHandler: (field: string, value: string | number | boolean | null, additionalProperties?: object) => void,
  clearFilterHandler: () => void,
}>
  (list: TItem[], settings: TSettings): TFilterReturnType => ({}) as TFilterReturnType;

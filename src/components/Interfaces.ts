/* import { OmitFromType } from "./utils/UtilityTypes"; */

export type ITodo = {
    id: number;
    label: string;
    important: boolean;
}

type ITodoListItemHandlerProps = {
    setImportantHandler: (id: number) => void
};

/* export type ITodoListItemProps = OmitFromType<ITodo, "id"> & ITodoListItemHandlerProps; */
export type ITodoListItemProps = ITodo & ITodoListItemHandlerProps;

export type ITodoListProps = {
    todos?: ITodo[];
} & ITodoListItemHandlerProps;
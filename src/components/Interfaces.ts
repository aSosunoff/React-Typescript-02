import { OmitFromType } from "./utils/UtilityTypes";

export type ITodo = {
    id: number;
    label: string;
    important: boolean;
}

export type ITodoListItem = OmitFromType<ITodo, "id">;

export interface ITodoList {
    todos?: ITodo[];
}
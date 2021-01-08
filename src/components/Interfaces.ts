import { OmitFromType } from "./utils/UtilityTypes";

export type ITodo = {
    id: number;
    label: string;
    important: boolean;
}

export type ITodoListItemProps = OmitFromType<ITodo, "id">;

export interface ITodoListProps {
    todos?: ITodo[];
}
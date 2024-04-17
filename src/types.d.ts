import { TODO_FILTERS } from "./consts";

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}
type Todocompleted = boolean;

export type TodoId = Pick<Todo, 'id'>
export type Todotitle = Pick<Todo, 'title'>
export type Todocompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
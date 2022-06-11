export interface ITodo {
    id: number 
    text: string 
    isCompleted: boolean
}

export interface IFilterTodo {
    todo?: ITodo[]
    parameter?: string
}
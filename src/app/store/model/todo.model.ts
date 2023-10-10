export interface TodoInterface {
    text: string[];
}

export class TodoUpdate {
    static readonly type = '[Todo]: Todo Update';
    constructor(public payload: TodoInterface) { }
}


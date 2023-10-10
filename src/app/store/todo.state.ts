import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { TodoInterface, TodoUpdate } from './model/todo.model';

@State<TodoInterface>({
    name: 'TodoState',
    defaults: {
        text: []
    }
})
@Injectable()
export class TodoState {
    @Selector()
    static getText(state: TodoInterface) {
        return state.text;
    }
    @Selector()
    static getTodoObject(state: TodoInterface) {
        return state;
    }
    @Action(TodoUpdate)
    updateTodoModel(context: StateContext<TodoInterface>, action: TodoUpdate) {
        const state = context.getState();
        const updatedArr = [...state.text, ...action.payload.text]
        context.patchState({
            text: updatedArr
        })
    }

}
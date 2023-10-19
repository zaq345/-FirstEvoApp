import { Action, Selector, State, StateContext } from "@ngxs/store";
import { FavInterface, FavUpdate } from "./model/fav.model";
import { Injectable } from "@angular/core";

@State<FavInterface>({
    name: 'FavState',
    defaults: {
        favArr: []
    }
})
@Injectable()
export class FavState {
    @Selector()
    static getFavObject(state: FavInterface) {
        return state
    }
    @Action(FavUpdate)
    updateTodoModel(context: StateContext<FavInterface>, action: FavUpdate) {
        const state = context.getState();
        const updatedArr = [...state.favArr]; // Создаем копию массива favArr
        const payloadArr = action.payload.favArr;

        payloadArr.forEach(id => {
            if (updatedArr.includes(id)) {
                // Если id уже существует в массиве, удаляем его
                updatedArr.splice(updatedArr.indexOf(id), 1);
            } else {
                // Если id не существует в массиве, добавляем его
                updatedArr.push(id);
            }
        });

        context.patchState({
            favArr: updatedArr
        });
    }
}
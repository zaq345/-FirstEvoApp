export interface FavInterface {
    favArr: Number[];
}

export class FavUpdate {
    static readonly type = '[Fav]: Fav Update';
    constructor(public payload: FavInterface) { }
}
export interface Post {
    body: string,
    favorite: boolean,
    id: number,
    image: string,
    tags: string,
    timeCooking: number,
    title: string,
    user: {
      date: string,
      id: number,
      image: string,
      name: string
    }
}

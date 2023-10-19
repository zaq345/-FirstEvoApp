import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://ea-backend.wckz.space/posts')
  }
  getPost(id: string | number) {
    return this.http.get('https://ea-backend.wckz.space/posts/' + id)
  }

  getUser(id: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get('https://ea-backend.wckz.space/users/' + id, { headers });
  }

  login(login: string, password: string) {
    const body = {
      username: login,
      password: password
    };
    return this.http.post('https://ea-backend.wckz.space/users/login', body);
  }

  register(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    return this.http.post('https://ea-backend.wckz.space/users/register', body);
  }

  postRecipe(body: object, token: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.post('https://ea-backend.wckz.space/posts', body, { headers });
  }
}

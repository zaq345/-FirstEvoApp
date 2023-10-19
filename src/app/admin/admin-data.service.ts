import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private http: HttpClient) { }

  getUsers(token: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NzU2NTk2NSwiZXhwIjoxNjk3NTczMTY1fQ.jCEmVqNjcXPc2ZtDCLJfRBIFiwjYVXMF0D-Oes2P8Tw');

    return this.http.get('https://ea-backend.wckz.space/users', { headers });
  }

  getRecipes() {
    return this.http.get('https://ea-backend.wckz.space/posts');
  }

  updateRecipe(id: number, body: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.patch('https://ea-backend.wckz.space/posts/' + id, body, { headers });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3000/api/item';
  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get<Item[]>(this.baseUrl);
  }

 addItem(user) {
    return this.http.post(this.baseUrl, user);
  }
  deleteItem(id) {
    return this.http.delete(this.baseUrl + "/deleteitem/" + id);
  }
}

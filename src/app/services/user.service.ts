import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "../model/item";

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl = "http://localhost:3000/api/item";
  baseUrl2 = "http://localhost:3000/api/items";
  constructor(private http: HttpClient) {}

  getItem() {
    return this.http.get<Item[]>(this.baseUrl2);
  }
  getItemById(id) {
    return this.http.get<Item>(this.baseUrl+id);
  }

  addItem(user) {
    return this.http.post(this.baseUrl2, user);
  }

  deleteItem(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateItem(user) {
    return this.http.put(`${this.baseUrl}/${user.id}`, user);
  }
}

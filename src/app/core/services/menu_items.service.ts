import { Injectable } from "@angular/core";
import { MenuItem } from "../../model/menu-item.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private baseUrl = '/api/menu-items';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<MenuItem[]>(this.baseUrl);
  }

}

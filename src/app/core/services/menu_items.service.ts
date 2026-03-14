import { Injectable } from "@angular/core";
import { MenuItem } from "../../model/menu-item.model";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private baseUrl = `${environment.apiUrl}/menu-items`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<MenuItem[]>(this.baseUrl);
  }

}
